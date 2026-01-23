import { postInput } from "./modules/firebase.js";
import { filterByFavorite } from "./modules/sort&filter.js";

const checkbox = document.querySelector('#favorites');
checkbox.addEventListener('change',()=>{
    filterByFavorite();
})

const myForm = document.querySelector('#inputform');
myForm.addEventListener('submit', event =>{
    event.preventDefault()
    postInput(myForm);
})

