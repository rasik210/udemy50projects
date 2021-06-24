var isHambergurVisible = true
var isNavBarVisible = false

function TogglePageControls() {
  ChangeMenuTogglerIcon()
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
    HideNavMenu()
    isNavBarVisible = false
  } else {
    navBar.classList.remove('navBarClosed')
    navBar.classList.add('navBarOpen')
    ShowNavMenu()
    isNavBarVisible = true
  }
}

function HideNavMenu() {
  navMenuHome.classList.remove('list-item-show')
  navMenuHome.classList.add('list-item-home-hide')
  navMenuAbout.classList.remove('list-item-show')
  navMenuAbout.classList.add('list-item-about-hide')
  navMenuContact.classList.remove('list-item-show')
  navMenuContact.classList.add('list-item-contact-hide')
}

function ShowNavMenu() {
  navMenuHome.classList.add('list-item-show')
  navMenuHome.classList.remove('list-item-home-hide')
  navMenuAbout.classList.add('list-item-show')
  navMenuAbout.classList.remove('list-item-about-hide')
  navMenuContact.classList.add('list-item-show')
  navMenuContact.classList.remove('list-item-contact-hide')
}

function ChangeMenuTogglerIcon() {
  const hambergurButton = document.getElementById('hambergurMenu')
  const cross = document.getElementById('cross')
  const contentDiv = document.getElementsByClassName('divCellContent')[0]
  const quarterCircle = document.getElementById('quarterCircle')

  if (isHambergurVisible) {
    hambergurButton.classList.add('hideMenu')
    hambergurButton.classList.remove('showMenu')
    cross.classList.remove('hideCross')
    cross.classList.add('showCross')
    contentDiv.classList.add('rotate')
    contentDiv.classList.remove('rotateBack')
    quarterCircle.classList.add('quarterCircleNavOpen')
    isHambergurVisible = false
  } else {
    hambergurButton.classList.remove('hideMenu')
    hambergurButton.classList.add('showMenu')
    cross.classList.add('hideCross')
    cross.classList.remove('showCross')
    contentDiv.classList.remove('rotate')
    contentDiv.classList.add('rotateBack')
    quarterCircle.classList.remove('quarterCircleNavOpen')
    isHambergurVisible = true
  }
}
