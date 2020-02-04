var monBouton = document.querySelector('#toggleMenu');
var monMenuHamburber = document.querySelector('#monMenu');

monBouton.addEventListener('click',function (){
    monMenuHamburber.classList.toggle('visible');
});

monBouton.addEventListener('click',function (){
  monBouton.classList.toggle('active');
});




