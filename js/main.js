$(document).ready(function (){
  // 錨點點擊效果
  $(".mlp_scrollIcon").click(function(e){
    e.preventDefault();
    const newhash = $(this).attr("href");
    const w = $(window).width();
    const headerHeight = $('.header').innerHeight();
    $('html,body').animate({ scrollTop:$(newhash).offset().top - headerHeight }, 800);
  });
})