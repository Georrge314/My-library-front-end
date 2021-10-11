import { html } from '../../node_modules/lit-html/lit-html.js';

export let registerTemplate = (form) => html`
<section id="register-page">
    <form @submit=${form.submitHandler} class="register-login-form" action="post">
        <div class="register-login-container">
            <label class="custom-file-upload" for="input-image">
                <input type="file" id="input-image" name="image" required>
                Click to insert profile image <i class="far fa-file-image"></i>
            </label>

            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required>

            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email address" required>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required>

            <label for="repeatPassword">Repeat Password</label>
            <input type="password" id="repeatPassword" placeholder="Repeat your password" required>

            <div class="submit-container-user">
                <button type="submit">Register</button>
            </div>
        </div>
    </form>
</section>`;