import '../src/SCSS/main.scss';
import '../node_modules/swiper/css/swiper.css';
import '../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';

//swiper plugin

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

//FAQ section questions list

const faqQuestion = () => {
  const questions = document.querySelectorAll(".questions__item");
  const questionsContainer = document.querySelector(".faq__block--questions");

  questionsContainer.addEventListener('click', ev => {
    const activeQuest = ev.target.closest('.questions__item');

    questions.forEach(el => {
      el.children[0].classList.remove('active');
      el.children[0].children[0].setAttribute("class","triangle--dis");
      el.children[1].classList.remove('open');
    })
  
    activeQuest.children[0].classList.add('active');
    activeQuest.children[0].children[0].setAttribute("class","triangle--active");
    activeQuest.children[1].classList.add('open');

  })

}

faqQuestion();

