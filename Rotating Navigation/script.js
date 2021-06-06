var isHambergurMenuVisible = true
var isNavBarVisible = false

function changeButtonShape() {
  const menuButton = document.getElementById('menuButton')
  const divNodes = menuButton.getElementsByTagName('div')
  const contentDiv = document.getElementsByClassName('divCellContent')[0]
  const navBar = document.getElementById('navBar')
  const navMenu = document.getElementById('navMenu')

  if (isHambergurMenuVisible) {
    divNodes[2].classList.remove('hambergur')
    divNodes[3].classList.remove('hambergur')
    divNodes[4].classList.remove('hambergur')
    divNodes[0].classList.add('cross1')
    divNodes[1].classList.add('cross2')
    contentDiv.classList.add('rotate')
    contentDiv.classList.remove('rotateBack')
    isHambergurMenuVisible = false
  } else {
    divNodes[2].classList.add('hambergur')
    divNodes[3].classList.add('hambergur')
    divNodes[4].classList.add('hambergur')
    divNodes[0].classList.remove('cross1')
    divNodes[1].classList.remove('cross2')
    contentDiv.classList.remove('rotate')
    contentDiv.classList.add('rotateBack')
    isHambergurMenuVisible = true
  }

  if (isNavBarVisible) {
    navBar.classList.add('navBarClosed')
    navBar.classList.remove('navBarOpen')
    navMenu.classList.remove('list')
    navMenu.classList.add('list-hide')
    isNavBarVisible = false
  } else {
    navBar.classList.remove('navBarClosed')
    navBar.classList.add('navBarOpen')
    navMenu.classList.add('list')
    navMenu.classList.remove('list-hide')
    isNavBarVisible = true
  }
}
