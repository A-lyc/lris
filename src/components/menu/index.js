import './index.scss'

let $menuEl = $('.comp-menu')
let $menuItem = $('.hamburger-menu-item')
let $openMenuElArr = $('[data-open="menu"]')
let $closeMenuElArr = $('[data-close="menu"]')

$openMenuElArr.on('click', function () {
    $openMenuElArr.addClass('active')
    $menuEl.addClass('active')
    $menuItem.addClass('active')
})

$closeMenuElArr.on('click', function () {
  $openMenuElArr.removeClass('active')
  $menuEl.removeClass('active')
  $menuItem.removeClass('active')
})