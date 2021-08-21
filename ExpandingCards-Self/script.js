window.onclick = (e) => {
  console.log(e.target)
  if (e.target.nodeName != 'DIV') return

  if (e.target.nodeName == 'DIV' && e.target.id == '') return

  e.target.classList.add('expand')

  var picTitle = e.target.getElementsByTagName('p')
  picTitle[0].classList.add('picTitle')
  picTitle[0].classList.remove('picTitleHide')

  var allDivs = document.getElementsByClassName('panel')

  for (let index = 0; index < allDivs.length; index++) {
    const currElement = allDivs[index]
    if (currElement.id != e.target.id) {
      currElement.classList.remove('expand')
      var childPicTitle = currElement.getElementsByTagName('p')
      childPicTitle[0].classList.add('picTitleHide')
      childPicTitle[0].classList.remove('picTitle')
    }
  }
}
