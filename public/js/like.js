$(document).ready(function(){
    $('.fa-heart').on('click', function(e){
        const postid = $(this).data('postid');
        let like = e.target.dataset.like;
        
        $.ajax({
          url:`/likeupdate`,
          method:'get',
          data:{
            like:like,
            id:postid, 
          },
          success: function(response){
            if(like==1){
                e.target.classList.toggle('fas')
                e.target.dataset.like = 0;
            } else {
                e.target.classList.toggle('far')
                e.target.dataset.like = 1;
            }
          }
    })
    })
    })