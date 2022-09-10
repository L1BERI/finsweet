$(function () {
  $(".rateYo").rateYo({
    rating: 4.6,
    starWidth: "28px",
    halfStar: true,
    spacing: "10px"
  });

});

$(function () {
  var mixer = mixitup('.blog__cards');

  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })

  $('.customers__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    variableWidth: true,
    speed: 300,
    dots: true,
    appendDots: $('.customers__dots'),
    waitForAnimate: false
  })

  $('.customers__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
  })
  $('.customers__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
  })



  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('questions__acc-link--active')
    $(this).children('.questions__acc-text').slideToggle()
  })
})

