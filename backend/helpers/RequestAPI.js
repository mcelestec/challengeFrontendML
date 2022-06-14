const axios = require('axios').default;

const requestAPI = async (url) => {
    try {
        const response = await axios.get(url);
        return response ? response.data : null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function get(url) {
    return axios.get(url);
}

const multiplesRequestAPI = async (urls) => {
    var listRequests = [];
    urls.map(url => listRequests.push(get(url)));

    let resultsToReturn;
    await Promise.all(listRequests)
        .then(function (results) {
            resultsToReturn = results;
        });

    return resultsToReturn;
}

module.exports = { requestAPI, multiplesRequestAPI }

