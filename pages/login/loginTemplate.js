import { html } from '../../node_modules/lit-html/lit-html.js';

export let loginTemplate = (form) => html`
<section id="login-page">
    <form @submit=${form.submitHandler} class="register-login-form" action="post">
        <div class="register-login-container">

            <label for="username">Username</label>
            <input name="username" type="text" id="username" placeholder="Enter your username" required>

            <label for="password">Password</label>
            <input name="password" type="password" id="password" placeholder="Enter your password" required>

            <div class="submit-container-user">
                <button type="submit">Login</button>
            </div>

        </div>
    </form>
</section>`;