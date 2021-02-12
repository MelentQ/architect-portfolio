$(function () {
  // Fixed Header
  let header = $('#header')
  let intro = $('#intro')
  let nameBlock = $('#nameBlock')
  let introH = intro.innerHeight()
  let scrollPos = $(window).scrollTop()

  // let nav = $('#nav')
  // let navToggle = $('#navToggle')

  checkScroll(scrollPos, introH)

  $(window).on('scroll load resize', function () {
    introH = intro.innerHeight()
    scrollPos = $(this).scrollTop()
    checkScroll(scrollPos, introH)
  })

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass('fixed')
      nameBlock.addClass('name-block_scrolled')
    } else {
      header.removeClass('fixed')
      nameBlock.removeClass('name-block_scrolled')
    }
  }

  // Smooth scroll
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault()

    let elementId = $(this).data('scroll')
    let elementOffset = $(elementId).offset().top

    // nav.removeClass('show')

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      700
    )
  })

  // Nav Toggle
  // navToggle.on('click', function (event) {
  //   event.preventDefault()

  //   nav.toggleClass('show')
  // })

  // Testimonials: https://kenwheeler.github.io/slick/
  // let slider = $('#gallerySlider')

  // slider.slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   fade: true,
  //   arrows: false,
  //   dots: true,
  // })

  $('.gallery__slider').slick({
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    touchThreshold: 5,
    // centerMode: true,
    variableWidth: true,
  });
})