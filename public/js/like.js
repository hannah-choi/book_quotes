$(document).ready(function(){
    $('.fa-heart').on('click', function(e){
        // e.preventDefault();
      const postid = $(this).data('postid');
        $.ajax({
          url:'http://localhost:8000/likeupdate',
          method:'post',
          data:{
            like: 1,
          },
          success: function(response){
            console.log('!!!')
            //$(this).classList.toggle('far')    
          }
    })
    })
    })