const { response } = require('express');
const { getItemById, searchItems } = require('../models/Item');
const { jsonItem, jsonItems } = require('../helpers/JsonItem');


const getItem = async (request, response = response) => {

    // se obtiene el id para buscar el item
    const id = request.params.id;

    // se solicita a la API el item según su ID
    let json = await getItemById(id);

    if (json.item) {
        // DEV NOTE: debería obtenerse la información del usuario logueado. Por ahora se deja harcodeado
        const user = { name: "Celeste", lastname: "Carignano" };

        // se transforma el json recibido de la API al formato establecido para retornar a los clientes
        response.json(jsonItem(json, user));
    } else {
        return response.status(400).json({
            message: 'Get item by id fails.'
        });
    }
}

const search = async (request, response = response) => {

    // se obtienen las palabras que conforman la búsqueda, y la cantidad de items a retornar (opcional)
    const query = request.query.q;
    const limit = request.query.limit;

    // se solicita a la API los items
    const json = await searchItems(query, limit);

    if (json) {
        // DEV NOTE: debería obtenerse la información del usuario logueado. Por ahora se deja harcodeado
        const user = { name: "Celeste", lastname: "Carignano" };

        // se transforma el json recibido de la API al formato establecido para retornar a los clientes
        response.json(jsonItems(json, user));
    } else {
        return response.status(400).json({
            message: 'Search items fails.'
        });
    }
}

module.exports = { getItem, search }