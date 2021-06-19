var isHambergurVisible = true
var isNavBarVisible = false

function changeButtonShape() {
  ChangeMenuToggler()
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
    HideMenu()
    isNavBarVisible = false
  } else {
    navBar.classList.remove('navBarClosed')
    navBar.classList.add('navBarOpen')
    ShowMenu()
    isNavBarVisible = true
  }
}

function HideMenu() {
  navMenuHome.classList.remove('list')
  navMenuHome.classList.add('list-item-home-hide')
  navMenuAbout.classList.remove('list')
  navMenuAbout.classList.add('list-item-about-hide')
  navMenuContact.classList.remove('list')
  navMenuContact.classList.add('list-item-contact-hide')
}

function ShowMenu() {
  navMenuHome.classList.add('list')
  navMenuHome.classList.remove('list-item-home-hide')
  navMenuAbout.classList.add('list')
  navMenuAbout.classList.remove('list-item-about-hide')
  navMenuContact.classList.add('list')
  navMenuContact.classList.remove('list-item-contact-hide')
}

function ChangeMenuToggler() {
  const hambergurButton = document.getElementById('hambergurMenu')
  const cross = document.getElementById('cross')
  const contentDiv = document.getElementsByClassName('divCellContent')[0]

  if (isHambergurVisible) {
    hambergurButton.classList.add('hideMenu')
    hambergurButton.classList.remove('showMenu')
    cross.classList.remove('hideCross')
    cross.classList.add('showCross')
    contentDiv.classList.add('rotate')
    contentDiv.classList.remove('rotateBack')
    isHambergurVisible = false
  } else {
    hambergurButton.classList.remove('hideMenu')
    hambergurButton.classList.add('showMenu')
    cross.classList.add('hideCross')
    cross.classList.remove('showCross')
    contentDiv.classList.remove('rotate')
    contentDiv.classList.add('rotateBack')
    isHambergurVisible = true
  }
}
