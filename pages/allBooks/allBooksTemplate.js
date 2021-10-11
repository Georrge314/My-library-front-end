import { html } from '../../node_modules/lit-html/lit-html.js';


export let singleBookTemplate = (book) => html`
<div class="book">
    <div class="image-wrap">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91hPXkwnaeL.jpg" href="/"
            alt="Game of Thrones">
    </div>
    <h3>Game of Thrones</h3>
    <div class="rating">
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
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

export let allBooksTemplate = (form, allBooks) => html`
<section id="books-page">
    <div id="books-container">
        <form @submit=${form.submitHandler} id="filters-form" method="get">
            <div id="filters-container">
                <input autocomplete="on" type="text" name="search" placeholder="Search books...">
                <i id="search-icon" class="fas fa-search"></i>

                <select name="category-select" data-filter-multiple="true" id="category-select">

                    <optgroup label="Categories">
                        <option value="adventure">Adventure</option>
                        <option value="biography-and-authorbiography">Biography And Authorbiography
                        </option>
                        <option value="classic">Classic</option>
                        <option value="comic">Comic</option>
                        <option value="cookbook">Cookbook</option>
                        <option value="detective-and-mistery">Detective And Mystery</option>
                        <option value="drama">Drama</option>
                        <option value="essay">Essay</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical-fiction">Historical Fiction</option>
                        <option value="history">History</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="literary-fiction">Literary Fiction</option>
                        <option value="memoir">Memoir</option>
                        <option value="poetry">Poetry</option>
                        <option value="science-fiction">Science Fiction</option>
                        <option value="self-help">Self Help</option>
                        <option value="short-stories">Short Stories</option>
                        <option value="thriller">Thriller</option>
                        <option value="true-crime">True Crime</option>
                        <option value="womens-fiction">Women's Fiction</option>
                    </optgroup>

                </select>

            </div>
        </form>

        <div id="book-container">
            ${allBooks.lenght === 0 
            ? html`<p>No books yet!</p>`
            : allBooks.map(b => singleBookTemplate(b))
            }
        </div>
    </div>
</section>`;



