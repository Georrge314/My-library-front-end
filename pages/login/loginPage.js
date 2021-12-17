import authService from '../../services/authService.js';
import { loginTemplate } from '../login/loginTemplate.js'

let form = undefined;

async function submitHandler(context, e) {
    e.preventDefault();
    let formData = new FormData(e.target);

    let username = formData.get('username');
    if (username.length < 5) {
        alert('Username must be at least 5 characters long.');
        let templateResult = registerTemplate(form);
        return context.renderView(templateResult);
    }

    let password = formData.get('password');
    if (password.length < 5) {
        alert('Password must be at least 5 characters long.');
        let templateResult = loginTemplate(form);
        return context.renderView(templateResult);
    }

    let user = {
        username: formData.get('username'),
        password: formData.get('password'),
    }

    let errorMessage = await authService.login(user);
    if (errorMessage !== undefined) {
        alert(`${errorMessage}`);
        let templateResult = loginTemplate(form);
        return context.renderView(templateResult);
    }
    context.page.redirect('/');
}

async function getView(context) {
    let boundSubmitHandler = submitHandler.bind(null, context);
    form = {
        submitHandler: boundSubmitHandler,
    }
    let templateResult = loginTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView,
};