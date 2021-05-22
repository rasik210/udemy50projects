var isMenuVisible = true

function changeButtonShape() {
  const menuButton = document.getElementById('menuButton')
  const divNodes = menuButton.getElementsByTagName('div')
  const contentDiv = document.getElementsByClassName('divCellContent')[0]

  if (isMenuVisible) {
    divNodes[2].classList.remove('hambergur')
    divNodes[3].classList.remove('hambergur')
    divNodes[4].classList.remove('hambergur')
    divNodes[0].classList.add('cross1')
    divNodes[1].classList.add('cross2')
    contentDiv.classList.add('rotate')
    contentDiv.classList.remove('rotateBack')
    isMenuVisible = false
  } else {
    divNodes[2].classList.add('hambergur')
    divNodes[3].classList.add('hambergur')
    divNodes[4].classList.add('hambergur')
    divNodes[0].classList.remove('cross1')
    divNodes[1].classList.remove('cross2')
    contentDiv.classList.remove('rotate')
    contentDiv.classList.add('rotateBack')
    isMenuVisible = true
  }
}
