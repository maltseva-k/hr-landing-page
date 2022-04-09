import Swiper from 'swiper/bundle'
// import styles bundle
import 'swiper/css/bundle'

const button = document.querySelector('.button')
const cards = document.querySelectorAll('.card')
button.addEventListener('mouseover', function () {
  this.classList.add('button_active')
})

button.addEventListener('mouseout', function () {
  this.classList.remove('button_active')
})

for (let i = 0; i < cards.length; i++) {
  const icon = cards[i].querySelector('.icon')
  cards[i].addEventListener('mouseover', function () {
    icon.classList.add('icon_active')
    const activeCard = document.querySelectorAll('.card_active')
    if (activeCard.length) {
      activeCard[0].className = activeCard[0].className.replace('card_active', '')
    }
    this.classList.add('card_active')
  })
  cards[i].addEventListener('mouseout', function () {
    this.classList.remove('card_active')
    icon.classList.remove('icon_active')
  })
}

/* const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
}) */
const swiper = new Swiper('.swiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true
})

swiper.slideNext()

const swiperImage = new Swiper('.swiper-image', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev'
  },
  pagination: {
    el: '.swiper-pag',
    clickable: true
  },
  mousewheel: true,
  keyboard: true
})

swiperImage.slideNext()

const swiperCards = new Swiper('.swiperCards', {
  cssMode: true,
  navigation: {
  },
  pagination: {
    el: '.swiper-cards-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true
})

swiperCards.slideNext()

/* const cardsContainer = document.querySelector('.swiper-cards-container')
cardsContainer.addEventListener('mouseover', function () {
  this.classList.add('display-none')
}) */
