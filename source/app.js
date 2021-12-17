import page from '../node_modules/page/page.mjs'
import renderMiddleware from '../rendering/renderMiddleware.js';
import authService from '../services/authService.js';

import navigationPage from '../navigation/navigationPage.js'

import homePage from '../pages/home/homePage.js'
import registerPage from '../pages/register/registerPage.js'
import loginPage from '../pages/login/loginPage.js'
import allBooksPage from '../pages/allBooks/allBooksPage.js'
// import detailsPage from '../pages/detailsBook/detailsBookPage.js'

let appContainer = document.getElementById('main-content');
let navigationContainer = document.getElementById('navigation');
renderMiddleware.initialiaze(appContainer, navigationContainer);

page('/', renderMiddleware.decorateContext, navigationPage.getView, homePage.getView);
page('/register', renderMiddleware.decorateContext, navigationPage.getView, registerPage.getView);
page('/login', renderMiddleware.decorateContext, navigationPage.getView, loginPage.getView);
page('/logout', async (context) => { await authService.logout(); context.page.redirect('/'); });
// page('/create-book', renderMiddleware.decorateContext(), navigationPage.getView().createBookPage.getView());
// page('/edit-book/:id', renderMiddleware.decorateContext(), navigationPage.getView(), editBookPage.getView());
// page('/details-book/:id', renderMiddleware.decorateContext, navigationPage.getView, detailsBookPage.getView);
page('/all-books', renderMiddleware.decorateContext, navigationPage.getView, allBooksPage.getView);



//TODO
// page('details-book/:id/comments');
// page('details-book/:id/add-comment');
// page('/my-books');
// page('/account');
// page('/read-book/:id');
// page('/pricing');
// page('/about-us');




page.start();