import { Book } from "./books";
import { booksRef, db } from "./firebaseconfig";
import { ref, onValue, update, push } from "firebase/database";


export let books = [];
let dbObj = {}

onValue(booksRef, snapshot => {
    dbObj = snapshot.val()
    const wrapper = document.querySelector('#books');
    wrapper.innerHTML = '';
    books = [];

    for (const key in dbObj) {
        const newBook = new Book(dbObj[key].title, dbObj[key].author, dbObj[key].favorite, key, dbObj[key].imageUrl)
        books.push(newBook);
        newBook.renderBook(wrapper);
    }
}, error => console.log(error))


export function postInput(myForm) {

    const formData = Object.fromEntries(new FormData(myForm));

    const { title, author, imageUrl } = formData;


    const newID = push(booksRef).key;
    if (newID) {
        for (const key in dbObj) {
            if (dbObj[key].title === title && dbObj[key].author === author) {
                alert('Book is already registered');
                return;
            }
        }
        const newRef = ref(db, '/books/' + newID);
        update(newRef, { title, author, favorite: false, imageUrl });
    }
}




