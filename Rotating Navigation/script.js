var isMenuVisible = 1

function changeButtonShape() {
  var menuButton = document.getElementById('menuButton')
  var divNodes = menuButton.getElementsByTagName('div')

  if (isMenuVisible) {
    divNodes[0].classList.remove('hambergur')
    divNodes[1].classList.remove('hambergur')
    divNodes[2].classList.remove('hambergur')
    divNodes[3].classList.add('cross1')
    divNodes[4].classList.add('cross2')
    isMenuVisible = 0
  } else {
    divNodes[0].classList.add('hambergur')
    divNodes[1].classList.add('hambergur')
    divNodes[2].classList.add('hambergur')
    divNodes[3].classList.remove('cross1')
    divNodes[4].classList.remove('cross2')
    isMenuVisible = 1
  }
}
