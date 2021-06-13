var isHambergurMenuVisible = true
var isNavBarVisible = false

function changeButtonShape() {
  const hambergurMenu = document.getElementById('hambergurMenu')
  const cross = document.getElementById('cross')
  const contentDiv = document.getElementsByClassName('divCellContent')[0]
  const navBar = document.getElementById('navBar')
  const navMenu = document.getElementById('navMenu')

  if (isHambergurMenuVisible) {
    hambergurMenu.classList.add('hideMenu')
    hambergurMenu.classList.remove('showMenu')
    cross.classList.remove('hideCross')
    cross.classList.add('showCross')
    contentDiv.classList.add('rotate')
    contentDiv.classList.remove('rotateBack')
    isHambergurMenuVisible = false
  } else {
    hambergurMenu.classList.remove('hideMenu')
    hambergurMenu.classList.add('showMenu')
    cross.classList.add('hideCross')
    cross.classList.remove('showCross')
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
