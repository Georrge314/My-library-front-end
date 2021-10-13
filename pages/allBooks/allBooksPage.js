import { allBooksTemplate } from '../allBooks/allBooksTemplate.js';
import booksService from '../../services/booksService.js';

let form = undefined;
let allBooks = undefined;

async function clickHandler(context, e) {
    e.preventDefault();
    let formData = new FormData(e.target);

    search = formData.get('searchText');
    category = formData.get('category');


    if (formData.get('searchText') === '') {

        if (category === "All") {
            allBooks = booksService.getAll();
        } else {
            allBooks = booksService.getByCategory(category);
        }
        return context.redirect('/all-books');
    } else {
        // let filter = {
        //     search,
        //     category,
        // }
        // allBooks = await booksService.getAllByCriteria(filter);
    }

    //Just for tests;
    allBooks = [];
}

async function getView(context) {
    if (allBooks === undefined) {
        //allBooks = await booksService.getAllBooks;
        allBooks = [];
    }

    let boundClickHandler = clickHandler.bind(null, context);
    form = {
        clickHandler: boundClickHandler,
    }

    let templateResult = allBooksTemplate(form, allBooks);
    context.renderView(templateResult);
    allBooks = undefined;
}

export default {
    getView,
}