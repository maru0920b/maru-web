const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1500,
  watchSlidesProgress: true,
  virtualTranslate: true
});

const aboutSwiper = new Swiper('.about-swiper', {
  direction: 'horizontal',
  loop: true,
  initialSlide: 0,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1500,
  watchSlidesProgress: true,
  virtualTranslate: true
});
