import { html } from '../../node_modules/lit-html/lit-html.js';

export let registerTemplate = (form) => html`
<section id="register-page">
    <form @submit=${form.submitHandler} class="register-login-form" action="post">
        <div class="register-login-container">
            
            <label for="username">Username</label>
            <input name="username" type="text" id="username" placeholder="Enter your username" required>

            <label for="email">Email address</label>
            <input name="email" type="email" id="email" placeholder="Enter your email address" required>

            <label for="fullname">Full Name</label>
            <input name="fullname" type="text" id="fullname" placeholder="Enter full name" required>

            <label for="password">Password</label>
            <input name="password" type="password" id="password" placeholder="Enter your password" required>

            <label for="repeatPassword">Repeat Password</label>
            <input name="repeatPassword" type="password" id="repeatPassword" placeholder="Repeat your password" required>

            <div class="submit-container-user">
                <button type="submit">Register</button>
            </div>
        </div>
    </form>
</section>`;