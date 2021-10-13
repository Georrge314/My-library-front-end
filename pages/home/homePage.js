import { homeTemplate } from '../home/homeTemplate.js';
import booksService from '../../services/booksService.js';

import authService from '../../services/authService.js'

async function getView(context, next) {
    //await booksService.getTopRatedBooks();
    let topRatedBooks = undefined;
    if (topRatedBooks === undefined || topRatedBooks === null) {
        topRatedBooks = [];
    }
    let isLoggedIn = await authService.isLoggedIn();
    let username = await authService.getUsername();
    context.renderView(homeTemplate(topRatedBooks, isLoggedIn, username));
    next();
}

export default {
    getView,
}