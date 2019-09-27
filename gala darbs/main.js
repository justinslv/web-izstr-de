$('.carousel').carousel({
    interval: 7000
  })

  $('body').scrollspy({ target: '#navbar-example' })

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })