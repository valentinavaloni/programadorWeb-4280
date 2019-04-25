var studentsList = prompt("ingrese un nombre")[
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

var result = getStudents(studentsList)

console.log('se encontró al estudiante en posición ' + result)

function getStudents(studentsArray) {
  var student
  var total = 0
  for (var i = 0; i < studentsArray.length; i++) {
    student = studentsArray[i]

    if (student.firstName == firstName) {
      return i
    }
  }

  return -1
}
