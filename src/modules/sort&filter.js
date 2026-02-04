/*Listan ska gå att filtrera så att
Endast favoriter visas
Alla böcker visas
Listan ska gå sortera så att
Böckerna visas i bokstavsordning utifrån titeln: a till ö / ö till a
Böckerna visas i bokstavsordning utifrån författaren: a till ö / ö till a
Böckerna visas i ordningen de lagts till: först till sist / sist till först
Sortering och filtrering ska fungera tillsammans. Väljs en ny filtrering ska samma sortering fortfarande gälla. Ex endast favoriter visas från a till ö.
*/ 
//funkade inte att skriva '? favorite: true' i onValue referensen
//kolla på claras github FP1 för exempel kod på hur du ska tänka gällande checkboxens filtrering.

const isFavorite = (book) => book.favorite === true;

export function filterByFavorite(booksArray){
    return booksArray.filter(isFavorite);
}

//Sortera efter titel A-Ö
export const sortByTitleAsc = (booksArray) => {
    const cloneArr = [...booksArray];
    return cloneArr.sort((a, b) => a.title.localeCompare(b.title));
};

//Sortera efter titel Ö-A  
export const sortByTitleDesc = (booksArray) => {
    const cloneArr = [...booksArray];
    return cloneArr.sort((a, b) => b.title.localeCompare(a.title));
};

export const sortByAuthorDesc = (booksArray) => {
    const cloneArr = [...booksArray];
    return cloneArr.sort((a, b) => b.author.localeCompare(a.author));
};

export const sortByAuthorAsc = (booksArray) => {
    const cloneArr = [...booksArray];
    return cloneArr.sort((a, b) => a.author.localeCompare(b.author));
};


export const sortByLastFirst = (booksArray) => {
    const cloneArr = [...booksArray];
    return cloneArr.reverse();
};




