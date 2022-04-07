const button = document.querySelector('.button')
const cards = document.querySelectorAll('.card')
button.addEventListener('mouseover', function () {
  this.classList.add('button_active')
})

button.addEventListener('mouseout', function () {
  this.classList.remove('button_active')
})

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover', function () {
    const activeCard = document.querySelectorAll('.card_active')
    if (activeCard.length) {
      activeCard[0].className = activeCard[0].className.replace('card_active', '')
    }
    this.classList.add('card_active')
  })
  cards[i].addEventListener('mouseout', function () {
    this.classList.remove('card_active')
  })
}
