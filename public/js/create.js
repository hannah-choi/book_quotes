const form = document.querySelector('form')

const bookTitle = form.booktitle.value;
const author = form.author.value;
const bookContents = form.book_contents.value;

// function returnFalse(){
//     if(!bookTitle||!author||!bookTitle){
//         alert(`Type required fields`);
//         return false;
//     }
// }

form.addEventListener('submit', ()=>{
    if(bookTitle && author && bookContents){
        alert('successfully posted!');
        return true;        
    } 
    else {
        alert(`Type required fields`);
        return false;
}
}
);

//input