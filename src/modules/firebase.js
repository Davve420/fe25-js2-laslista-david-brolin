import { Book } from "./books";
import { booksRef, db } from "./firebaseconfig";
import { ref,onValue, update, push} from "firebase/database";
let dbObj = new Book;

onValue(booksRef, snapshot =>{
    dbObj = snapshot.val()
    const wrapper = document.querySelector('#books');
    wrapper.innerHTML = '';
    
    for(const key in dbObj){
        const container = document.createElement('div');
        container.style.border = 'solid black 2px'
        const title = document.createElement('h2');
        const author = document.createElement('h3');
        const favorite = document.createElement('button');
        const delBtn = document.createElement('button');
        delBtn.innerText = 'delete book';
        title.innerText = dbObj[key].title;
        author.innerText = dbObj[key].author;
        if(dbObj[key].favorite === false){
            favorite.innerHTML =  '☆';
            
        } else{
            favorite.innerHTML = '⭐';
        }
        favorite.addEventListener('click', ()=>{
            const bookRef = ref(db, `/books/${key}`)
            update(bookRef,{favorite: !dbObj[key].favorite})
        }
            
        )

        container.append(favorite,title,author,delBtn);
        wrapper.append(container)
    }
})

// export function createBook(){
const myForm = document.querySelector('#inputform');
myForm.addEventListener('submit', event =>{
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(myForm));


    const { title, author } = formData;
    const newbook = new Book(title, author)

    const newID = push(booksRef).key;
        if(newID){
        for(const key in dbObj){
            if(dbObj[key].title === title){
                console.log('Book is already registered');
                return;
            }
        }
        const newRef = ref(db, '/books/'+ newID);
        update(newRef,newbook);
    }

    })
// }