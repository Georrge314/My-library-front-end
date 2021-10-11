import { html } from "../../node_modules/lit-html/lit-html.js"

export let detailsBookPage = (book) => html`
<section id="details-page">
    <div id="info-section">
        <div class="info-container">
            <img src="/images/top-rated/Harry-Potter-1.jpg">
            <h1>Harry Potter and the philosopher's stone'</h1>
            <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                <span>1,986</span>
            </div>
            <div class="price">
                <span class="price-symbol">$</span>
                <span class="price-whole">12</span>
                <span class="price-decimal">.</span>
                <span class="price-fraction">25</span>
            </div>
        </div>
        <div class="info-summary">
            <p class="text">On his 11th birthday, Harry receives a letter inviting him to study magic at the
                Hogwarts School of Witchcraft and Wizardry. Harry discovers that not only is he a wizard,
                but he is a famous one. He meets two best friends, Ron Weasley and Hermione Granger, and
                makes his first enemy, Draco Malfoy.
                On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts
                School of Witchcraft and Wizardry. Harry discovers that not only is he a wizard, but he is a
                famous one. He meets two best friends, Ron Weasley and Hermione Granger, and makes his first
                enemy, Draco Malfoy.
                On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts
                School of Witchcraft and Wizardry. Harry discovers that not only is he a wizard, but he is a
                famous one. He meets two best friends, Ron Weasley and Hermione Granger, and makes his first
                enemy, Draco Malfoy.
                On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts
                School of Witchcraft and Wizardry. Harry discovers that not only is he a wizard, but he is a
                famous one. He meets two best friends, Ron Weasley and Hermione Granger, and makes his first
                enemy, Draco Malfoy.
            </p>

            <div class="info-buttons">
                <button href="/" class="info-btn-edit">Edit</button>
                <button href="/" class="info-btn-delete">Delete</button>
                <button href="/" class="info-btn-buy">Buy</button>
                <button href="/" class="info-btn-read">Start reading</button>
            </div>

            <div class="comments-buttons">
                <button>Comments</button>
                <button>Add commnet</button>
            </div>

        </div>

    </div>
</section>`;