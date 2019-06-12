function searchPersonIndexById (id, peopleList) {
  var index = -1
  for (var i = 0; i < peopleList.length; i++) {
    var person = peopleList[i]
    var personId = person.url.split('/')[5]
    if (personId === id) {
      index = i
      break
    }
  }
  return index
}

export {searchPersonIndexById}