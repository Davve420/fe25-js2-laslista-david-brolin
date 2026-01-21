
export class Book{
    #author
    #title
    #favorite
    constructor(author, title){
        this.#author = author;
        this.#title = title;
        
    }

    delbook(){
        remove(this); //psuedo kod idk
    }

    favorbook(){
        this.#favorite = !this.#favorite;
    }
}