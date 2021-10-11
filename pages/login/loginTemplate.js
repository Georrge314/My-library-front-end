import { html } from '../../node_modules/lit-html/lit-html.js';

export let loginTemplate = (form) => html`
<section id="login-page">
    <form @submit=${form.submitHandler} class="register-login-form" action="post">
        <div class="register-login-container">

            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email address" required>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required>

            <label for="repeatPassword">Repeat Password</label>
            <input type="password" id="repeatPassword" placeholder="Repeat your password" required>

            <div class="submit-container-user">
                <button type="submit">Login</button>
            </div>

        </div>
    </form>
</section>`;