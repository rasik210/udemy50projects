function changeButtonShape() {
  var hambergurLayers = document.getElementsByClassName('hambergur')
  Array.from(hambergurLayers).forEach((element) => {
    element.classList.remove('hambergur')
  })

  var cross1 = document.getElementById('cross1')
  cross1.classList.add('cross1')

  var cross2 = document.getElementById('cross2')
  cross2.classList.add('cross2')
}
