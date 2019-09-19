$(function () {
  $('.jobs-carousel-content').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})  