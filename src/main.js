import { postInput, books } from "./modules/firebase.js";
import { sortByAuthorAsc, sortByTitleAsc, sortByTitleDesc, sortByAuthorDesc, filterByFavorite, sortByLastFirst } from "./modules/sort&filter.js";

const checkbox = document.querySelector('#favorites');
const sortSelect = document.querySelector('select');

let currentSort = 'title-asc';

function renderBooks(books) {
    const wrapper = document.querySelector('#books');
    wrapper.innerHTML = '';
    books.forEach(book => book.renderBook(wrapper));
}

checkbox.addEventListener('change', () => {
    let result = [...books];
    if (checkbox.checked) {
        result = filterByFavorite(books);
    }
    currentSort = document.querySelector('select').value;
    if (currentSort === 'title-asc') {
        result = sortByTitleAsc(result);
    } else if (currentSort === 'title-desc') {
        result = sortByTitleDesc(result);
    } else if (currentSort === 'author-asc') {
        result = sortByAuthorAsc(result);
    } else if (currentSort === 'author-desc') {
        result = sortByAuthorDesc(result);
    } else if (currentSort === 'last-first') {
        result = sortByLastFirst(result);
    }
    renderBooks(result);
});

sortSelect.addEventListener('change', (event) => {
    let result = [...books];
    if (checkbox.checked) {
        result = filterByFavorite(books);
    }
    currentSort = event.target.value;
    if (currentSort === 'title-asc') {
        result = sortByTitleAsc(result);
    } else if (currentSort === 'title-desc') {
        result = sortByTitleDesc(result);
    } else if (currentSort === 'author-asc') {
        result = sortByAuthorAsc(result);
    } else if (currentSort === 'author-desc') {
        result = sortByAuthorDesc(result);
    } else if (currentSort === 'last-first') {
        result = sortByLastFirst(result);
    }

    renderBooks(result);
});

const myForm = document.querySelector('#inputform');
myForm.addEventListener('submit', event => {
    event.preventDefault()
    postInput(myForm);
    myForm.reset();
})

