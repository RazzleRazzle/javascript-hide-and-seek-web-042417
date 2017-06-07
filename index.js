function getFirstSelector(selector) {
  var elem = document.querySelector(selector)
  return elem
}

function nestedTarget() {
  var elem = document.getElementById('nested').querySelector('div div div')
  return elem
}

//raise rank of all .ranked-list elements by n value (parseInt())
function increaseRankBy(n) {
  var elems = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < elems.length; i++) {
    elems[i].innerHTML = parseInt(elems[i].innerHTML) + n
  }
}

function deepestChild() {
  var kid = document.getElementById('grand-node').querySelector('div div div div div')
  return kid
}
