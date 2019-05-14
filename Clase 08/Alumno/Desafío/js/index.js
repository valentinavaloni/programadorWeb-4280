
var student = {
  firstName: 'Juan',
  lastName: 'Perez',
  dni: 22999333,
  email: 'juan@gmail.com'
}


function createStudentNode(newStudent) {

  var liNode = document.createElement('li')

  liNode.id = newStudent.dni

  var fullName = 

  if (newStudent.firstName && newStudent.lastName) {
    fullName = newStudent.firstName + ', ' + newStudent.lastName
  } else if (newStudent.firstName) {
    fullName = newStudent.firstName
  } else if (newStudent.lastName) {
    fullName = newStudent.lastName
  }

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    fullName +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}