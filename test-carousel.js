$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(window).load(function(){
  $(".list_img img").click(function(){
    var img_src = $(this).attr("src");
    $(".display_img img").attr("src", img_src);
  });
});

$(document).ready(function(){
  $("#menu").click(function(){
    $('.pagelink_box').toggleClass('sidemenu_active'); // .sidemenu_active をつけたり外したり
    $(".sp_menu_toggle").slideToggle();
  });
});

$(document).ready(function(){
  $("#menu2").click(function(){
    $('.categori_box').toggleClass('sidemenu_active'); // .sidemenu_active をつけたり外したり    
    $(".sp_menu_toggle2").slideToggle();
  });
});
