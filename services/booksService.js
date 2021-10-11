import { jsonRequest } from "../helpers/jsonRequest.js";


let baseUrl = '';

async function getLatestGames() {
    let response = jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`)
    return response
}

async function getAll() {
    let response = jsonRequest(baseUrl);
    return response
}

async function get(id) {
    let response = jsonRequest(`${baseUrl}/${id}`);
    return response
}

async function create(item) {
    let response = jsonRequest(baseUrl, 'Post', item, true);
    return response
}

async function update(item, id) {
    let response = jsonRequest(`${baseUrl}/${id}`, 'Put', item, true);
    return response
}
async function deleteItem(id) {
    let response = jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true);
    return response
}


export default {
    getAll,
    get,
    create,
    update,
    deleteItem,
    getLatestGames,
}