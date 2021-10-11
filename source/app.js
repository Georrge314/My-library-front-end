import {page} from '../node_modules/page/page.mjs';
import {renderMiddleware} from '../rendering/renderMiddleware.js';
import {authService} from '../services/authService.js'

import {navigationPage} from '../navigation/navigationPage.js'

let appContainer = document.getElementById('main-content');
let navigationContainer = document.getElementById('navigation');
renderMiddleware.initialiaze(appContainer, navigationContainer);

page('/', renderMiddleware.decorateContext(), navigationPage.getView(), homePage.getView());




page.start();