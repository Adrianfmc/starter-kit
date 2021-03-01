import '@scss/main.scss'

import {
  Header
} from '@/app/header';
import {
  Footer
} from '@/app/footer';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

// core version + navigation, pagination modules:
import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper/core';

console.log(`***Header******`);
let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);

console.log(`***footer******`);
let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

var swiper = new Swiper('.swiper-container', {
// Optional parameters
  effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
// If we need pagination
  pagination: {
    el: '.swiper-pagination',
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
