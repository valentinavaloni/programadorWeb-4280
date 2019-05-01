var numbers = [1, 2, 3, 4, 5]

function daleteElement(index, array) {
  var arrayCopy = array.slice()

  arrayCopy.splice(index, 1)

  return arrayCopy

}

var newNumbers = daleteElement(2, numbers)

console.log(newNumbers)
