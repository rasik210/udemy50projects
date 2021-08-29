var step = 1

function nextStep() {
  if (step == 4) return

  var nextLink = document.getElementById(step)
  // var textSibling = nextLink.nextSibling
  // textSibling.style.border = '2px solid red'
  nextLink = nextLink.nextSibling.nextSibling
  nextLink.classList.remove('linePending')
  nextLink.classList.add('lineTraversed')

  step++
  var circle = document.getElementById(step)
  circle.classList.remove('stepPending')
  circle.classList.add('stepTraversed')
  if (step == 4) {
    var next = document.getElementById('btnNext')
    next.classList.remove('buttonActive')
    next.classList.add('buttonDisabled')
  }

  if (step > 1) {
    var previous = document.getElementById('btnPrevious')
    previous.classList.remove('buttonDisabled')
    previous.classList.add('buttonActive')
  }
}

function previousStep() {
  if (step == 1) return

  var nextLink = document.getElementById(step - 1)
  nextLink = nextLink.nextSibling.nextSibling
  nextLink.classList.add('linePending')
  nextLink.classList.remove('lineTraversed')

  var circle = document.getElementById(step)
  circle.classList.remove('stepTraversed')
  circle.classList.add('stepPending')

  if (step == 2) {
    var previous = document.getElementById('btnPrevious')
    previous.classList.remove('buttonActive')
    previous.classList.add('buttonDisabled')
  }

  if (step == 4) {
    var next = document.getElementById('btnNext')
    next.classList.remove('buttonDisabled')
    next.classList.add('buttonActive')
  }

  step--
}
