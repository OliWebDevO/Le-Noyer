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
      delay: 10000,
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