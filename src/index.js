import '@scss/main.scss'

import { Header } from '@/app/header';
import { Footer } from '@/app/footer';

console.log(`***Header******`);
let header = new Header();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);

console.log(`***footer******`);
let footer = new Footer();
let footerText = footer.getFooterText();
console.log(footerText);

// import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/swiper-bundle.css';

  // core version + navigation, pagination modules:
 import SwiperCore, { Navigation, Pagination } from 'swiper/core';

 // configure Swiper to use modules
 SwiperCore.use([Navigation, Pagination]);

 // init Swiper:
 const swiper = new Swiper();
