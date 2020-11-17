const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    const bookTitle = form.bookTitle.value;
    const author = form.author.value;
    const bookContents = form.bookContents.value;

    console.log(bookTitle, author, bookContents)
    if(!bookTitle || !author || !bookContents){ 
        e.preventDefault();
        alert(`Type required fields`); //값이 없는 경우 오류메세지 alert
        return false;
    } 
    else {//값이 모두 있는 경우에만 submit
        alert('successfully posted!');
        return true;     
}
}
);

//input