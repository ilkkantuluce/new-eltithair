$('.single-item-wrap').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      }, {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }, {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }

  ]
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

    

});