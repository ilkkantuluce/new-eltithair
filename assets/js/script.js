var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 50,
        },
    },
});

$(document).ready(function(){
    $(document).click(function(){
        if ($(".dropdown-toggle").hasClass("show")) {
            $(".menu-dropdown-bg").addClass("show");
        }
        else{
            $(".menu-dropdown-bg").removeClass("show");

        }
    });

    $("body").click(function(){
        if ($(".dropdown-toggle").hasClass("show")) {
            $(".menu-dropdown-bg").addClass("show");
        }
        else{
            $(".menu-dropdown-bg").removeClass("show");

        }
    });

    $(".navbar-toggler").click(function(){
      $(".google-review").toggleClass("hide");
    });

});