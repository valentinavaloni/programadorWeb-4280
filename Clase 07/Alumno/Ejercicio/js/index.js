var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']

setLocalList('studentsList', testList)

function setLocalList(key, array) {
  if (typeof key === 'string' && Array.isArray(array)) {
    var stringArray = JSON.string(Array)
    localStorage.setItem(key, stringArray)
  }
}

setLocalList('studentsList', testList)






