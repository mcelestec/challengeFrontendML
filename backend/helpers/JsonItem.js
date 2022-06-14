const jsonItem = (json, user) => {

    ({ item, categories, description } = json);

    // se separa la parte entera de la decimal (por requerimiento) 
    let amount = Math.trunc(item.price);
    let decimals = Math.trunc((item.price - amount) * 100);

    let categoryList = [];

    // se obtienen las categorías asociadas al item
    if (categories) {
        categories.path_from_root.forEach(element => {
            categoryList.push(element.name);
        });
    }

    let result = {
        author: user,
        item: {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: amount,
                decimals: decimals
            },
            picture: item.pictures[0].url,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            description: description ? description.plain_text : "",
            categories: categoryList
        },
    }
    return result;
}

const jsonItems = (json, user) => {
    const categories = [];
    const items = [];

    if (json) {

        // se obtienen las categorías de los filtros aplicados
        let categoriesJson = json.filters.find(filter => filter.id = "category");

        if (categoriesJson) {
            categoriesJson.values.forEach(value => {
                value.path_from_root.forEach(element => {
                    categories.push(element.name);
                });
            });
        }

        // se procesa la información de los items recuperados
        json.results.forEach(element => {

            // se separa la parte entera de la decimal (por requerimiento)  
            let amount = Math.trunc(element.price);
            let decimals = Math.trunc((element.price - amount) * 100);

            let item = {
                id: element.id,
                title: element.title,
                price: {
                    currency: element.currency_id,
                    amount: amount,
                    decimals: decimals
                },
                picture: element.thumbnail,
                condition: element.condition,
                free_shipping: element.shipping.free_shipping,
                address: element.address.state_name
            };

            items.push(item)

        });
    }

    // se construye el objeto resultante
    const result = {
        author: user,
        categories: categories,
        items: items
    }

    return result;
}

module.exports = { jsonItem, jsonItems }