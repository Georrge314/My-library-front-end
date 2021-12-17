import authService from "../services/authService.js";

export async function jsonRequest(url, method, body, isAuthorized, skipResult) {
    if (method == undefined) {
        method = 'Get';
    }

    let headers = {};
    if (['post', 'put', 'patch'].includes(method.toLowerCase())) {
        headers['Content-Type'] = 'application/json';
        headers['Access-Control-Allow-Origin'] = '*';
        headers['Access-Control-Allow-Headers'] = '*';
        headers['Access-Control-Expose-Headers'] = '*';
    }

    if (isAuthorized) {
        headers['Authorization'] = 'Bearer ' + authService.getAuthToken();
    }

    let options = {
        method,
        headers
    }


    if(body !== undefined) {
        options.body = JSON.stringify(body);
    }

    let response = await fetch(url, options);
    
    let result = {};

    if (!response.ok) {
        let message = await response.text();
        console.log(message);
        let errorMessage = JSON.parse(message);
        result.errorMessage = errorMessage.details;
        return result;
    }
    
    if (!skipResult) {
        result.response = await response.json();
        result.authToken = await response.headers.get('authorization')
    }
    return result;
}