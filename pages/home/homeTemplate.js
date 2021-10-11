import { html } from '../../node_modules/lit-html/lit-html.js';


export let singleBookTemplate = (book) => html`
<div class="book">
    <div class="image-wrap">
        <img src="/images/top-rated/Harry-Potter-1.jpg" href="/" alt="Harry Potter and the philosopher's stone">
    </div>
    <h3>Harry Potter and the philosopher's stone</h3>
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
        <a href="/" class="btn details-btn">Details</a>
    </div>
</div>
`;

export let homeTemplate = (topRatedBooks, isLoggedIn, getUsername) => html`
<section id="home-page">

    <section id="welcome-message">
        <div class="overview">
            ${isLoggedIn 
            ? html`<p>Hello, ${getUsername} welcome to Bibliotek</p>`
            : html`<p>Hello, welcome to Bibliotek</p>`
            }
            <p>
                Bibliotek is an application where you can access online book content. Here you can read,
                rate and comment on books,
                making your own library and other people will be able to see and appreciate it!
            <p>
        </div>

        ${isLoggedIn
        ? html ``
        : html`
        <div id="create-library">
            <p>Create your Bibliotek account to get started!</p>
            <button id="btn-create-library" type="submit">Create Account</button>
        </div>`
        }
        
    </section>


    <section id="top-rated-wraper">

        <div id="top-rated-heading">
            <h1>Top rated books</h1>
        </div>

        <section id="top-rated-container">
            ${topRatedBooks.length === 0
           ? html`<p class="no-articles">No books yet.</p>`
            : topRatedBooks.map(b => singleBookTemplate(b))
        }
        </section>

        <div id="see-all">
            <button id="see-all-btn">See all</button>
        </div>
    </section>
</section>`;




