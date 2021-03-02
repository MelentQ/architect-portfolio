$(function () {
  // Fixed Header
  let header = $('#header')
  let intro = $('#intro')
  let nameBlock = $('#nameBlock')
  let introH = intro.innerHeight()
  let scrollPos = $(window).scrollTop()

  let menu = $('#menu')
  let menuToggle = $('#menuToggle')
  let menuCancel = $('#menuCancel')

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

    menu.removeClass('show')

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      700
    )
  })

  // Menu Toggle
  menuToggle.on('click', function (event) {
    event.preventDefault()

    menu.toggleClass('show')
  })

  // Menu Cancel
  menuCancel.on('click', function (event) {
    event.preventDefault()

    menu.removeClass('show')
  })

  $('.gallery__slider').slick({
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    touchThreshold: 5,
    adaptiveHeight: true,
  });
})