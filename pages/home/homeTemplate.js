import { html } from '../../node_modules/lit-html/lit-html.js';


export let singleBookTemplate = (book) => html`
<div class="book">
    <div class="image-wrap">
        <img src=${book.image} alt=${book.title}>
    </div>
    <h3>${book.title}</h3>
    <div class="rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <span>1,986</span>
    </div>
    <div class="price">
        <span class="price-symbol">$</span>
        <span class="price-whole">12</span>
        <span class="price-decimal">.</span>
        <span class="price-fraction">25</span>
    </div>
    <div class="data-buttons">
        <a href="/details-book" class="btn details-btn">Details</a>
    </div>
</div>`;

export let homeTemplate = (topRatedBooks, isLoggedIn, username) => html`
<section id="home-page">

    <section class="welcome-message">
        <div class="overview">
            ${isLoggedIn 
            ? html`<p>Hello, ${username} welcome to Bibliotek</p>`
            : html`<p>Welcome to Bibliotek</p>`
            }
            <p>
                Bibliotek is an application where you can access online book content. Here you can read,
                rate and comment on books,
                making your own library and other people will be able to see and appreciate it!
            <p>
        </div>

        ${isLoggedIn
        ? null
        : html`
        <div class="create-library">
            <p>Create your Bibliotek account to get started!</p>
            <a href="/register">Create Account</a>
        </div>`
        }
        
    </section>


    <section class="top-rated-wraper">

        <div class="top-rated-heading">
            <h1>Top rated books</h1>
        </div>

        <section class="top-rated-container">
            ${topRatedBooks.length === 0
           ? html`<p class="no-articles">No books yet.</p>`
            : topRatedBooks.map(b => singleBookTemplate(b))
        }
        </section>

        <div id="see-all">
            <a href="/all-books">See all</a>
        </div>
    </section>
</section>`;




