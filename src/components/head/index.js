import './index.scss'


let $headerEl = $('.comp-header-hamburger')

// 卷曲效果scroll
$(window).on('scroll', function () {

  if (window.pageYOffset !== 0) {
    $headerEl.addClass('active')
  } else {
    $headerEl.removeClass('active')
  }
})

let $header = $('.comp-header-imagess-show')

// 卷曲效果scroll
$(window).on('scroll', function () {

  if (window.pageYOffset !== 0) {
    $header.css('opacity','1')
  } else {
    $header.css('opacity', '0')
  }
})