window.onclick = (e) => {
  console.log(e.target)
  if (e.target.nodeName != 'DIV') return

  if (e.target.nodeName == 'DIV' && e.target.id == '') return

  e.target.classList.add('expand')
  var allDivs = document.getElementsByTagName('div')

  for (let index = 0; index < allDivs.length; index++) {
    debugger
    const currElement = allDivs[index]
    if (currElement.id != e.target.id) {
      currElement.classList.remove('expand')
    }
  }
}
