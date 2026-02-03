import { db } from "./firebaseconfig";
import { ref, update, remove } from "firebase/database";

export class Book {
    title
    author
    favorite
    id
    imageUrl
    constructor(title, author, favorite, id, imageUrl = null) {
        this.title = title;
        this.author = author;
        this.favorite = favorite;
        this.id = id;
        this.imageUrl = imageUrl;
    }

    getRef() {
        const bookRef = ref(db, `/books/${this.id}`);
        return bookRef;
    }

    renderBook(wrapper) {
        // Ytterst container
        const container = document.createElement('div');
        container.classList.add('bookPerspectiveContainerStyles', 'bookPerspectiveContainer');
        
        // Perspective wrapper
        const perspective = document.createElement('div');
        perspective.classList.add('bookPerspectiveStyles', 'bookPerspective');
        
        // Metadata (titel och författare)
        const metaText = document.createElement('div');
        metaText.classList.add('bookMetaTextStyles', 'bookMetaText');
        
        const title = document.createElement('h3');
        title.classList.add('bookMetaTextStylesTitle');
        title.innerText = this.title;
        
        const author = document.createElement('p');
        author.classList.add('bookMetaTextStylesAuthor');
        author.innerText = this.author;
        
        metaText.append(title, author);
        
        // 3D bok-effekten
        const bookThreeD = document.createElement('div');
        bookThreeD.classList.add('bookThreeDStyles', 'bookThreeD');
        bookThreeD.style.setProperty('--book-height', '32px');
        
        const img = document.createElement('img');
        img.src = this.imageUrl || 'https://via.placeholder.com/300x400?text=Book+Cover';
        img.alt = this.title;
        img.classList.add('bookImage');
        
        bookThreeD.append(img);
        
        // Knappar för favorite och delete
        const favoriteBtn = document.createElement('button');
        favoriteBtn.classList.add('favoritebtn');
        favoriteBtn.innerHTML = this.favorite ? '⭐' : '☆';
        favoriteBtn.addEventListener('click', () => this.favorbook());
        
        const delBtn = document.createElement('button');
        delBtn.innerText = 'delete';
        delBtn.classList.add('delButton');
        delBtn.addEventListener('click', () => this.delbook());
        
        // Sätta ihop allt
        perspective.append(metaText, bookThreeD);
        container.append(perspective);
        container.append(favoriteBtn);
        container.append(delBtn);
        
        wrapper.append(container);
    }

    delbook() {
        const bookRef = this.getRef();
        if(this.favorite === true){
            alert('Do you want to delete one of you favorites? Unfavor this book before deleting')
        }else{
            remove(bookRef);
        }
    }

    favorbook(){
        const bookRef = this.getRef();
        update(bookRef, { favorite: !this.favorite })

    }
}
