import { postInput, filterByFavorite, books } from "./modules/firebase.js";


const checkbox = document.querySelector('#favorites');
checkbox.addEventListener('change',()=>{
    console.log(books)
    console.log('checkbox checked')
    const filtered =  filterByFavorite(books);
})

const myForm = document.querySelector('#inputform');
myForm.addEventListener('submit', event =>{
    event.preventDefault()
    postInput(myForm);
})

