
$(document).ready(function(){
    $('.fa-heart').on('click', function(e){
        // e.preventDefault();
        const postid = $(this).data('postid');
        const like = $(this).data('like');
        console.log(like)
        console.log(postid)

        $.ajax({
        //   url:`/likeupdate?id=${postid}&like=${like}`,
            url:`/likeupdate`,
          method:'post',
          data:{
            like:like,
            id:postid, 
          },
          success: function(response){
            if(like==1){
                like=2;
            }    
          }
    })
    })
    })