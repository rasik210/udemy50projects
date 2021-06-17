var isHambergurMenuVisible = true
var isNavBarVisible = false

function changeButtonShape() {
  ToggleButtonShape()
  ToggleNavBar()
}

function ToggleNavBar() {
  const navBar = document.getElementById('navBar')
  const navMenuHome = document.getElementById('navMenuHome')
  const navMenuAbout = document.getElementById('navMenuAbout')
  const navMenuContact = document.getElementById('navMenuContact')

  if (isNavBarVisible) {
    navBar.classList.add('navBarClosed')
    navBar.classList.remove('navBarOpen')
    navMenuHome.classList.remove('list')
    navMenuHome.classList.add('list-item-home-hide')
    navMenuAbout.classList.remove('list')
    navMenuAbout.classList.add('list-item-about-hide')
    navMenuContact.classList.remove('list')
    navMenuContact.classList.add('list-item-contact-hide')
    isNavBarVisible = false
  } else {
    navBar.classList.remove('navBarClosed')
    navBar.classList.add('navBarOpen')
    navMenuHome.classList.add('list')
    navMenuHome.classList.remove('list-item-home-hide')
    navMenuAbout.classList.add('list')
    navMenuAbout.classList.remove('list-item-about-hide')
    navMenuContact.classList.add('list')
    navMenuContact.classList.remove('list-item-contact-hide')
    isNavBarVisible = true
  }
}

function ToggleButtonShape() {
  const hambergurMenu = document.getElementById('hambergurMenu')
  const cross = document.getElementById('cross')
  const contentDiv = document.getElementsByClassName('divCellContent')[0]

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
}
