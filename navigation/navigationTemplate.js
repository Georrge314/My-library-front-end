import { html } from '../node_modules/lit-html/lit-html.js';


export let navigationTemplate = (navInfo) => html`
<div class="navigation-items">
    <h2 class="navigation-home"><a href="/">Bibliotek.com</a></h2>
    <nav>
        <div class="navigation-everyone">
            <div class="all-books">
                <a href="/all-books">Books <i class="fas fa-book-open"></i></a>
            </div>
            <div class="dropdown">
                <button class="dropdown-btn">Categories
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <div class="dropdown-content-a">
                        <a href="/">Adventure</a>
                        <a href="/">Biography And Authorbiography</a>
                        <a href="/">Comic</a>
                        <a href="/">Classic</a>
                        <a href="/">Cookbook</a>
                        <a href="/">Detective And Mystery</a>
                        <a href="/">Drama</a>
                        <a href="/">Essay</a>
                        <a href="/">Fantasy</a>
                        <a href="/">Historical Fiction</a>
                        <a href="/">History</a>
                        <a href="/">Horror</a>
                        <a href="/">Romance</a>
                        <a href="/">Literary Fiction</a>
                        <a href="/">Memoir</a>
                        <a href="/">Poetry</a>
                        <a href="/">Science Fiction</a>
                        <a href="/">Self Help</a>
                        <a href="/">Short Stories</a>
                        <a href="/">Thriller</a>
                        <a href="/">True Crime</a>
                        <a href="/">Women's Fiction</a>
                    </div>
                </div>

            </div>
            <div class="pricing">
                <a href="/pricing">Pricing</a>
            </div>
        </div>

        <div class="user">
            ${navInfo.isLoggedIn
        ? html`
            <a class="my-books" href="/">My Books</a>
            <div class="user-dropdown">
                <a class="profile-link" href="/my-books"><img class="profile-img"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt=""><i class="fa fa-caret-down"></i></a>
                <div class="user-dropdown-content">
                    <a class="item" href="/account">Account Page</a>
                    <a class="item" href="/logout">Sign Out</a>
                </div>
            </div>`
        : html`
            <a class="sign-up" href="/register">Sign up</a>
            <a class="sign-in" href="/login">Sign in</a>`
        }
        </div>
    </nav>
</div>`;