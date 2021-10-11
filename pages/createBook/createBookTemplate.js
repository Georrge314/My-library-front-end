import { html } from '../../node_modules/lit-html/lit-html.js';

export let createBookTemplate = (form) => html`
    <section id="create-page">
        <form @submit=${form.submitHandler} class="create-edit-form" action="post">
            <div class="create-edit-container">
    
                <h1>Create Book</h1>
    
                <label for="title">Book title:</label>
                <input type="text" class="form-title" placeholder="Enter book title" required>
    
                <label for="author">Author full name:</label>
                <input type="text" class="form-author" placeholder="Author full name" required>
    
                <label for="image-url">Book image url:</label>
                <input type="text" class="form-image-url" placeholder="Upload a photo..."
                    alt="https://img.favpng.com/1/16/3/book-clip-art-png-favpng-xYmatH7pWyRD2tQEwF1Rb5xcE_t.jpg" required>
    
                <label for="category">Choose category:</label>
                <select name="categoty" class="create-edit-category">
                    <option value="adventure">Adventure</option>
                    <option value="biography-and-authorbiography">Biography And Authorbiography</option>
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
                </select>
    
                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary" cols="30" rows="10"></textarea>
    
                <div class="submit-container">
                    <button type="submit">Create Book</button>
                </div>
    
            </div>
        </form>
    </section>`;