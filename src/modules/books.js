import { db } from "./firebaseconfig";
import { ref, update, remove } from "firebase/database";

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
    }

    getRef() {
        const bookRef = ref(db, `/books/${this.id}`);
        return bookRef;
    }

    renderBook(wrapper) {
        const container = document.createElement('div');
        container.style.border = 'solid black 2px'
        container.classList.add('book')
        const title = document.createElement('h2');
        const author = document.createElement('h3');
        const favoriteBtn = document.createElement('button');
        favoriteBtn.classList.add('favoritebtn')
        const delBtn = document.createElement('button');
        delBtn.innerText = 'delete book';
        title.innerText = this.title;
        author.innerText = this.author;
        if (this.favorite === false) {
            favoriteBtn.innerHTML = '☆';

        } else {
            favoriteBtn.innerHTML = '⭐';
        }
        favoriteBtn.addEventListener('click', ()=>{
            this.favorbook();
        })

        delBtn.addEventListener('click',()=>{
            this.delbook();
        })
        // favorite.addEventListener('click', this.favorbook.bind(this))
        
        container.append(favoriteBtn, title, author, delBtn);
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
