function searchPeopleIndexByUrl (url, peopleList) {
  var index = -1
  for (var i = 0; i < peopleList.length; i++) {
    var person = peopleList[i]
    if (person.url === url) {
      index = i
      break
    }
  }
  return index
}

export { searchPeopleIndexByUrl }
