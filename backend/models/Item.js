const { requestAPI, multiplesRequestAPI } = require('../helpers/RequestAPI');

const getItemById = async (id) => {


    const results = await multiplesRequestAPI([
        `${process.env.API_URL}items/${id}`,
        `${process.env.API_URL}items/${id}/description`,
    ]);

    if (results) {
        let item = results[0].data;
        let description = results[1].data;

        // la información de las categorías del item deben solicitarse aparte, ya que se requiere 
        // conocer el id de la categoría específica asociada al item 
        let categories = await requestAPI(`${process.env.API_URL}/categories/${item.category_id}`);

        return {
            item: item,
            description: description,
            categories: categories
        }
    } else {
        return null;
    }
}

const searchItems = async (query, limit) => {
    try {
        // el límite es un parámetro opcional
        const subfix = limit ? `&limit=${limit}` : "";

        let items = await requestAPI(`${process.env.API_URL}/sites/MLA/search?q=${query}${subfix}`);

        return items;
    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = { getItemById, searchItems }
