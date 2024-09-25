
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

  $('.slide-page-custom-mto').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
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

  const slideMtos = $('.slide-page-custom-mto')
  slideMtos.each((index, slideMto) => {
    // console.log($(slideMto).children('.slick-list').children('.slick-track').children('.slick-slide:not(.slick-cloned)').children().children())
    const imagesMto = $(slideMto).children('.slick-list').children('.slick-track').children('.slick-slide:not(.slick-cloned)').children().children()
    const dotMto = $(slideMto).children('.slick-dots')
    $(dotMto).children('li').each((index, dot) => {
      $(dot).children('button').html($(imagesMto[index]).html())
    })
  })

  // Swatch on Collectiom
  $('.card__information fieldset.product-form__input--swatch input').click(function(){
    const dataMediaVariant = $(this).attr('data-option-value-id')

    const selectedSlickSlide = $(this).parent().parent().parent().parent().children('.owl-carousel').children('.slick-list').children('.slick-track').children('.slick-slide:not(.slick-cloned)').children().children(`[data-media-variant="${dataMediaVariant}"]`).parent().parent()
    const dataSlickIndex = $(selectedSlickSlide).attr('data-slick-index')

    const selectedSlickContainer = $(selectedSlickSlide).parent().parent().parent()

    $(selectedSlickContainer).slick('slickGoTo', dataSlickIndex);
  });
  // End Swatch on Collectiom

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