$(document).ready(function(){
  $('.owl-carousel').slick({
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
  });

  $('.custom-slideshow--desktop').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $('.custom-slideshow--mobile').slick({
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
    autoplay: true,
    autoplaySpeed: 2000
  });
});