var monBouton = document.querySelector('#toggleMenu');
var monMenuHamburber = document.querySelector('#monMenu');

monBouton.addEventListener('click',function (){
    monMenuHamburber.classList.toggle('visible');
});

monBouton.addEventListener('click',function (){
  monBouton.classList.toggle('active');
});




var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


$('button').click(function(){
  var cache = $(this).attr('data-filter');
  $('button').removeClass('active_tri');
  $(this).addClass('active_tri');
  $('.cathegorie').hide();
  $('.' + cache + '').show();
})