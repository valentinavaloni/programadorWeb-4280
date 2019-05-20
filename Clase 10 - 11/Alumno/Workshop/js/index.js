var studentsList = getLocalList('list')

for (var i = 0; i < studentsList.length; i++)
  var student = studentsList[i]
var listStudents = createStudentNode(student)
mainListNode.appendChild(studentsList)

setLocalList('listStudents', studentsList)

var firstNameInput = document.getElementById('firstName')
var dniInput = document.getElementById('dni')
addStudentButton = document.getElementsById('addStudentButton')
var mainList = document.getElementById(mainList)

firstNameInput.onblur = validateRequired
dniInput.onblur = validateDni
addStudentButton.onclick = addStudent
mainList.on

function addStudent() {
  var firstNameValue = firstNameInput.value
  var dniValue = dniInput.value

  var student = {
    firstName: firstNameValue,
    dni: dniValue
  }

  studentsList.push(student)
  var listStudents = createStudentNode(student)
  mainListNode.appendChild(studentsList)

  setLocalList('listStudents', studentsList)

  firstNameInput.value = ''
  dniInput.value = ''

  firstNameInput.classList.remove('is-valid')
  dniInput.classList.remove('is-valid')

  addStudentButton.disabled = true
}

function validateRequired(event) {
  var inputNode = event.target

  var value = inputNode.value

  if (
    !value) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
}

function validateDni(event) {
  var inputNode = event.target

  var value = inputNode.value

  var parsedValue = parseInt(value, 10)


  // todo no se como hacerlo
  var dniExists = flase

  if (searchStudentIndexByText(value, studentsList) !== -1)) {
    dniExists = true
  }else {
    dniExists = flase
  }

  if (
    !value || isNaN(parsedValue) || parsedValue <= 0 || dniExists) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
}

function validateAddButton() {
  var validInputs = document.getElementsByClassName('is-valid')

  if (validInputs.length !== 2) {
    addStudentButton.disabled = true
  } else {
    addStudentButton.disabled = false
  }
}
function setLocalList(key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}
function getLocalList(key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}
function createStudentNode(newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.dni

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  var fullName = ''

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

function searchStudentIndexByText(dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.firstName === dni || student.lastName === text) {
      index = i
      break
    }
  }
  return index
}

