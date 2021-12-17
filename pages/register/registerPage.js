import authService from '../../services/authService.js';
import { registerTemplate } from '../register/registerTemplate.js';

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

    let fullName = formData.get('fullname');
    if (fullName.length < 5) {
        alert('Full nane must be at least 5 characters long.');
        let templateResult = registerTemplate(form);
        return context.renderView(templateResult);
    }

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.get('email'))) {
        alert('Please enter valid email address.');
        let templateResult = registerTemplate(form);
        return context.renderView(templateResult);
    }

    let password = formData.get('password');
    if (password.length < 5) {
        alert('Password must be at least 5 characters long.');
        let templateResult = registerTemplate(form);
        return context.renderView(templateResult);
    }

    let repeatPassword = formData.get('repeatPassword');
    if (repeatPassword !== password) {
        alert('Repeat password must be same as password.');
        let templateResult = registerTemplate(form);
        return context.renderView(templateResult);
    }

    let user = {
        username: formData.get('username'),
        email: formData.get('email'),
        fullName: formData.get('fullname'),
        password: formData.get('password'),
        rePassword: formData.get('repeatPassword')
    }
    console.log(user);

    let errorMessage = await authService.register(user);
    if (errorMessage !== undefined) {
        alert(`${errorMessage}`);
        let templateResult = registerTemplate(form);
        return context.renderView(templateResult);
    }

    context.page.redirect('/login');
}

async function getView(context) {
    let boundSubmitHandler = submitHandler.bind(null, context);
    form = {
        submitHandler: boundSubmitHandler,
    }
    let templateResult = registerTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView,
};