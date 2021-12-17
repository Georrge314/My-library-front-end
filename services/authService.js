import { jsonRequest } from "../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:8080/api';

function getAuthToken() {
    return localStorage.getItem('authToken');
}

function getUsername() {
    return localStorage.getItem('username');
}

function getUserId() {
    return localStorage.getItem('userId');
}

function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

async function login(user) {
    let result = await jsonRequest(`${baseUrl}/public/login`, 'Post', user);
    if (result.errorMessage !== undefined) {
        return result.errorMessage;
    }
    localStorage.setItem('authToken', result.authToken);
    localStorage.setItem('username', result.response.username);
    localStorage.setItem('userId', result.response.id);
}

async function register(user) {
    let result = await jsonRequest(`${baseUrl}/public/register`, 'Post', user);
    if (result.errorMessage !== undefined) {
        return result.errorMessage;
    }
}

async function logout() {
    // await jsonRequest(`${baseUrl}/logout`, 'Get', undefined, true, true);
    localStorage.clear();
}

export default {
    getAuthToken,
    getUsername,
    getUserId,
    isLoggedIn,
    login,
    register,
    logout
}