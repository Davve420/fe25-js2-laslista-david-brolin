import { booksRef, db } from "./firebaseconfig";
import { ref, onValue, update, push, remove } from "firebase/database";

export class Book {
    title
    author
    favorite
    id
    constructor(title, author, favorite, id) {
        this.title = title;
        this.author = author;
        this.favorite = favorite;
        this.id = id;

        console.log('id', this.id)
    }

    getRef() {
        const bookRef = ref(db, `/books/${this.id}`);
        return bookRef;
    }

    renderBook(wrapper) {
        const container = document.createElement('div');
        container.style.border = 'solid black 2px'
        const title = document.createElement('h2');
        const author = document.createElement('h3');
        const favorite = document.createElement('button');
        const delBtn = document.createElement('button');
        delBtn.innerText = 'delete book';
        title.innerText = this.title;
        author.innerText = this.author;
        // console.log(this.favorite)
        if (this.favorite === false) {
            favorite.innerHTML = '☆';

        } else {
            favorite.innerHTML = '⭐';
        }
        favorite.addEventListener('click', ()=>{
            this.favorbook();
        })

        delBtn.addEventListener('click',()=>{
            this.delbook();
        })
        // favorite.addEventListener('click', this.favorbook.bind(this))
        
        container.append(favorite, title, author, delBtn);
        wrapper.append(container)
    }

    delbook() {
        const bookRef = this.getRef();
        if(this.favorite === true){
            alert('Do you want to delete one of you favorites? Unfavor this book before deleting')
        }else{
            remove(bookRef);
        }
    }

    favorbook() {

        const bookRef = this.getRef();
        update(bookRef, { favorite: !this.favorite })

    }
}
