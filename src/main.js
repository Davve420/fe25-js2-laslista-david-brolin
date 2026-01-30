import { postInput, books } from "./modules/firebase.js";
import { sortByAuthorAsc, sortByTitleAsc, sortByTitleDesc, sortByAuthorDesc, filterByFavorite, sortByFirstLast, sortByLastFirst } from "./modules/sort&filter.js";

const checkbox = document.querySelector('#favorites');
const sortSelect = document.querySelector('select');

let currentSort = 'title-asc'; 

function renderBooks() {
    const wrapper = document.querySelector('#books');
    wrapper.innerHTML = '';
    
    let result = books;
    if(checkbox.checked) {
        result = filterByFavorite(result); 
    }
    
    if(currentSort === 'title-asc') {
        result = sortByTitleAsc(result);
    } else if(currentSort === 'title-desc') {
        result = sortByTitleDesc(result);
    } else if(currentSort === 'author-asc') {
        result = sortByAuthorAsc(result);
    }else if(currentSort === 'author-desc') {
        result = sortByAuthorDesc(result);
    } else if(currentSort === 'first-last') {
        result = sortByFirstLast(result);
    } else if(currentSort === 'last-first') {
        result = sortByLastFirst(result);
    }
    

    result.forEach(book => book.renderBook(wrapper));
}

checkbox.addEventListener('change', () => {
    renderBooks();
});

sortSelect.addEventListener('change', (event) => {
    currentSort = event.target.value; 
    renderBooks(); 
});

const myForm = document.querySelector('#inputform');
myForm.addEventListener('submit', event =>{
    event.preventDefault()
    postInput(myForm);
    myForm.reset();
})

