import { Book } from "./books";
import { booksRef, db } from "./firebaseconfig";
import { ref,onValue, update, push} from "firebase/database";

let dbObj = {};

onValue(booksRef, snapshot =>{
    dbObj = snapshot.val()
    const wrapper = document.querySelector('#books');
    wrapper.innerHTML = '';
    
        for(const key in dbObj){
        const newBook = new Book(dbObj[key].title, dbObj[key].author,dbObj[key].favorite, key)
        newBook.renderBook(wrapper);
    }
}, error => console.log(error))



export function postInput(myForm){

    const formData = Object.fromEntries(new FormData(myForm));


    const { title, author } = formData;

    const newID = push(booksRef).key;
        if(newID){
        for(const key in dbObj){
            if(dbObj[key].title === title && dbObj[key].author === author){
                console.log('Book is already registered');
                return;
            }
        }
        const newRef = ref(db, '/books/'+ newID);
        update(newRef,{title, author,favorite: false});
    }
}