import '../src/SCSS/main.scss';
import '../node_modules/swiper/css/swiper.css';
import '../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';

console.log('hello');
console.log('hello2');

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
