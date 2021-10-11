import { homeTemplate } from '../home/homeTemplate.js';
import { booksService } from '../../services/booksService.js';

async function getView(context, next) {
    let topRatedBooks = await booksService.getTopRatedBooks();
    context.renderView(homeTemplate(topRatedBooks));
    next();
}

export default {
    getView,
}