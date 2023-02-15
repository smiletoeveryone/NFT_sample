$(document).ready(function (){
    $(".menu_btn").click(function(){
        $(this).toggleClass("open");
        $(".header_nav").toggleClass("open");
        $("body").toggleClass("noscroll")
    });

    $(".header_nav a").click(function(){
        $(".header_nav").removeClass("open");
        $("body").removeClass("noscroll");
        $(".menu_btn").removeClass("open");
    });



    // resize
    var isPhone = window.matchMedia('(max-width: 780px)').matches;
    $(window).resize(function(){
        var isPhone = window.matchMedia('(max-width: 780px)').matches;
        $('.resbg').each(function(){
            var bgURL = $(this).attr('src');
            $(this).css({
                'background-image': bgURL.length > 0 ? 'url(' + bgURL + ')' : 'none'
            });
        });

        if(isPhone) {
            $('.block-item--sm .block-info').css('height', 'unset');
          }else {
            $('.block-item--sm .block-info').css('height', 'unset');
            var contHeight = [];
            $('.block-item--sm .block-info').each(function(index){
              contHeight[index] = $(this).height();
            });
            var max = contHeight[0];
            for (var i = 0; i < contHeight.length; i++) {
              if(contHeight[i] >= max){
                max = contHeight[i];
                $('.block-item--sm .block-info').height(max);
              }
            }
          }
    }).resize();

    // gotop
    $('.gotop').click(function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: "0" }, 800);
    });

    $(window).scroll(function() {
        var w = $(window).width();
        if ($(window).scrollTop() >= 600) {
          $(".gotop").fadeIn(300);
        }else {
          $(".gotop").fadeOut(300);
        };
    });

    // 逛展指南點擊下拉
    $(".map .block-btn").click(function(e){
      e.preventDefault();
      $(this).parents('.map-block').toggleClass('open');
      $(this).parents('.map-block').siblings().removeClass('open');

      if($(this).parents('.map-block').hasClass('open')) {
          $(this).parents('.map-block').siblings().find('.block-info').slideUp(100);
          $(this).parents('.map-block').find('.block-info').slideDown(200);
      }else {
          $(this).parents('.map-block').find('.block-info').slideUp(100);
      }
    });

    var scrollVal = $(window).scrollTop();
    $(window).scroll(function () {
      scrollVal = $(this).scrollTop();
    });
    var position;
    // 燈箱
    $('.lightbox-btn').click(function(e){
      position = $(window).scrollTop();
      e.preventDefault();
      // $('.lightbox-info').css('display', 'none');
      $('.lightbox').css('display', 'flex');
      $('html, body').addClass('noscroll').scrollTop(scrollVal);
      if($(this).hasClass('lightbox-btn--1')){
        $('.lightbox-1').css('display', 'block');
      }else if($(this).hasClass('lightbox-btn--2')) {
        $('.lightbox-2').css('display', 'block');
      }else if($(this).hasClass('lightbox-btn--3')) {
        $('.lightbox-3').css('display', 'block');
      }else if($(this).hasClass('lightbox-btn--4')) {
        $('.lightbox-4').css('display', 'block');
      }else {
        $('.lightbox-info').css('display', 'none');
      }
    });

    $('.lightbox-bg, .close-icon').click(function(e){
      e.preventDefault();
      $('.lightbox').css('display', 'none');
      $('.lightbox-info').css('display', 'none');
      $('html, body').removeClass('noscroll').scrollTop(position);
    });
});


