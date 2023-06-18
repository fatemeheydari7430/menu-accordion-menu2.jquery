    $(document).ready(function(){
        $('.collapse-heading').click(function(){

         $(this).children('.collapse-controls').toggleClass('open');
         $(this).next('.collapse-body').slideToggle();



         // $('.collapse-controls').removeClass('open');

         // if($(this).next('.collapse-body').css('display')=='block'){
         //    $('.collapse-body').slideUp('open');
         // }
         // else{
         //    $(this).children('.collapse-controls').addClass('open');
         //    $(this).next('.collapse-body').slideDown();
         // }
         
        });
    });