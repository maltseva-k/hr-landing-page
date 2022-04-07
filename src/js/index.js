const button = document.querySelector('.button')

button.addEventListener('mouseover', function () {
  this.classList.add('button_active')
})

button.addEventListener('mouseout', function () {
  this.classList.remove('button_active')
})
