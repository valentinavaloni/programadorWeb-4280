var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

function searchStudentIndexByText(text, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.firstName === text || student.lastName === text) {
      index = i
      break
    }
  }
  return index
}

var text = prompt('Ingrese un nombre')
var index = searchStudentIndexByText(text, studentsList)

if (index !== -1) {
  console.log('Se encontró el estudiante en la posición', index)
} else {
  console.log('No se pudo encontrar el estudiante')
}
