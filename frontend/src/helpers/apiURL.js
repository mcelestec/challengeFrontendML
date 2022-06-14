
// Función utilizada para obtener la URL donde solicitar datos de un producto
export const urlItemAPI = (id) => {
    return `${process.env.REACT_APP_API_URL}/api/items/${id}`;
}

// Función utilizada para obtener la URL donde solicitar datos de productos según filtro
export const urlItemsAPI = (query, limit) => {
    if (limit && limit > 0) {
        return `${process.env.REACT_APP_API_URL}/api/items?q=${encodeURI(query)}&limit=${limit}`;
    } else {
        return `${process.env.REACT_APP_API_URL}/api/items?q=${encodeURI(query)}`;
    }
}

