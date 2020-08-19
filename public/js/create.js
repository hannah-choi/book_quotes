const form = document.querySelector('form')

// const bookTitle = form.booktitle.value;
// const author = form.author.value;
// const bookContents = form.book_contents.value;

// function returnFalse(){
//     if(!bookTitle||!author||!bookTitle){
//         alert(`Type required fields`);
//         return false;
//     }
// }

form.addEventListener('submit', (e)=>{
    console.log(form.booktitle.value,form.author.value,form.book_contents.value)
    if(form.booktitle.value=="" || form.author.value=="" || form.book_contents.value==""){ 
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