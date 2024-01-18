$('.center').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow:`<div class="btn-next">
  <button><i class="fa-solid fa-angle-right"></i></button>
</div>`,
    prevArrow: `<div class="btn-prev">
    <button><i class="fa-solid fa-angle-left"></i></button>
</div>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
  
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});