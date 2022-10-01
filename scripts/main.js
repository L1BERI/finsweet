$(function () {
  $(".rateYo").rateYo({
    rating: 4.6,
    starWidth: "28px",
    halfStar: true,
    spacing: "10px",
    readOnly: true
  });


  var mixer = mixitup('.blog__cards');

  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })

  $('.customers__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    speed: 300,
    dots: true,
    appendDots: $('.customers__dots'),
    waitForAnimate: false,
    responsive:
      [
        {
          breakpoint: 1325,
          settings: {
            slidesToShow: 1,
          },
        },
      ]   
  })

  $('.customers__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
  })
  $('.customers__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
  })

  $('.header__nav-item').on('click', function(e){
    e.preventDefault()
    if ($('.header__top').hasClass('header__top--media')){
      $('.header__top').removeClass('header__top--media')
      $('.overlay').removeClass('overlay--visible')
      $('body').css('overflow-y', 'scroll')
    }
  })

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('questions__acc-link--active')
    $(this).children('.questions__acc-text').slideToggle()
  })

  $(".header__nav-list a, .footer__nav a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--media') === false) {
      $('.burger').addClass('burger--scroll')
    } else {
      $('.burger').removeClass('burger--scroll')
    }
  }, 0);
  // $('.burger').on('click', function (e) {
  //   e.preventDefault()

  // })
  $('.burger,.overlay').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('burger--active')
    $('.header__top').toggleClass('header__top--media')
    $('.overlay').toggleClass('overlay--visible')
  })
});