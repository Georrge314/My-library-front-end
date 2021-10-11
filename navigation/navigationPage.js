import { navigationTemplate } from "./navigationTemplate.js";

import {authService} from "../services/authService.js";

async function getView(context, next) {
    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
    };
    let templateResult = navigationTemplate(navInfo);
    context.renderNav(templateResult);
    next();
}

export default {
    getView,
}