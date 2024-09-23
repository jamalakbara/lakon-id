
$(document).ready(function(){
  // Slick
  $('.owl-carousel').slick({
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
  });

  $('.slide-page-custom').slick({
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
  $('.product-carousel-custom').slick({
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
    responsive: [
      {
        breakpoint: 749,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  });
  // End Slick

  $('.card__information fieldset.product-form__input--swatch input').click(function(){
    console.log($(this))
  });

  // // get .card__information fieldset.product-form__input--swatch
  // $('.card__information fieldset.product-form__input--swatch').children().each(function(){
  //   $(this).click(function(){
  //     // if $(this) is input element then console.log it
  //     if ($(this).is('input')) {
  //       const dataMediaVariant = $(this).attr('data-option-value-id')
  //       const slickSlides = $(this).parent().parent().parent().parent().children('.owl-carousel').children('.slick-list').children('.slick-track').children('.slick-slide')
  //       const slickTrack = $(this).parent().parent().parent().parent().children('.owl-carousel').children('.slick-list').children('.slick-track')

  //       $(slickSlides).children().each(function(){
  //         const figure = $(this).children()

  //         // if figure has data-media-variant then console.log it in jquery
  //         if ($(figure).attr('data-media-variant') === dataMediaVariant) {

  //           const slickSlide = $(this).parent()
  //           // if slickSlide doesn't have class name slick-clone then console.log it
  //           if (!$(slickSlide).hasClass('slick-cloned')) {
  //             const imageOfSelectedVariant = $(figure).children()
  //             const currentActiveSlide = $(this).parent().parent().children('.slick-slide.slick-current.slick-active')[0]
              
  //             $(currentActiveSlide).children().children().children().replaceWith(imageOfSelectedVariant)
  //           }


  //         }
  //       });
  //     }
  //   });
  // });

  const accordionProductDesc = () => {
    let acc = document.getElementsByClassName("accordion");
    let i;
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  const sizeChartModal = () => {
    // Get the modal
    const modal = document.getElementById("modal-size-chart");
  
    // Get the button that opens the modal
    const btn = document.getElementById("modal-size-chart-button");
  
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    
    if (!modal) {
      return
    }
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "flex";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    } 
  }


  sizeChartModal()
  accordionProductDesc()
}); 