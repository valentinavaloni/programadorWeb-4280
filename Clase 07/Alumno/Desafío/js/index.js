function getLocalList(key) {

  if (typeof key === 'string') {

    var localList = localStorage.getItem(key)

    if (localList) {

      var parsedList = JSON.parse(localList)
      return parsedList
    } else {

      return []
    }
  }
}

var studentsList = getLocalList('studentsList')
if (studentsList) {
  console.log(studentsList)
  if (studentsList.length) {
    console.log('Se encontraton ' + studentsList.length + ' estudiantes guardados en el localStorage')
  } else {
    console.log('No se encontro estudiantes guardados en el localStorage')
  }
}


