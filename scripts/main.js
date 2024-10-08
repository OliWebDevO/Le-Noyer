// START PLUGINS LINKS

// Lenis

const lenis = new Lenis({
    // Valeur entre 0 et 1
    // Valeur par défaut : 0,1
    // Plus la valeur est faible, plus le scroll sera fluide
    lerp: 0.08, 
    // Valeur par défaut : 1
    // Plus la valeur est haute, plus le défilement sera rapide 
    wheelMultiplier: 1, 
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
  
  // Wow Plugins start
  new WOW().init();

  // Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay :  {
      delay: 1000000,
      disableOnInteraction:false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // NAV APPEAR

let nav = document.querySelector('nav'); 
let prenav = document.querySelector('.prenav');
let currentScrollPosition =0;
window.addEventListener("scroll", function(){  
       currentScrollPosition = window.scrollY;         
       if (currentScrollPosition  > 0){
            nav.classList.add('translateUp');
            prenav.classList.add('translateUpPreNav');
        } else {
            nav.classList.remove("translateUp");
            prenav.classList.remove('translateUpPreNav');
        }
} );


// Back to top

let backToTop = document.querySelector('.back-to-top')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
backToTop.addEventListener('click', ()=>{
  window.scrollTo({top: 0, behavior: "smooth"});
})
