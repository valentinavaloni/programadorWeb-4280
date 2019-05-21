console.log('1er Workshop')

var studentsList = getLocalList('list')

// setLocalList('listStudents', studentsList)

var firstNameInput = document.getElementById('firstName')
var dniInput = document.getElementById('dni')
var deleteDniInput = document.getElementById('deleteDni')
var addStudentButton = document.getElementById('addStudentButton')
var deleteStudentButton = document.getElementById('deleteStudentButton')
var mainListNode = document.getElementById('mainList')
var emailInput = document.getElementById('email')
var lastNameInput = document.getElementById('lastName')
var searchInput = document.getElementById('searchText')
var searchStudentButton = document.getElementById('searchStudentButton')

for (var i = 0; i < studentsList.length; i++) {
  var student = studentsList[i]
  var liStudent = createStudentNode(student)
  mainListNode.appendChild(liStudent)
}

firstNameInput.onblur = validateRequired
dniInput.onblur = validateDni
emailInput.onblur = emailValidation

addStudentButton.onclick = addStudent
deleteStudentButton.onclick = deleteStudent
searchStudentButton.onclick = searchStudent

function deleteStudent () {
  var dniValue = deleteDniInput.value

  if (dniValue) {
    var index = searchStudentIndexByDni(dniValue, studentsList)

    if (index !== -1) {
      studentsList.splice(index, 1)

      setLocalList('list', studentsList)

      var liNode = document.getElementById(dniValue)

      mainListNode.removeChild(liNode)

      deleteDniInput.value = ''
    } else {
      var massage = 'Usuario no existe'
      return massage
    }
  }
}

function addStudent () {
  var firstNameValue = firstNameInput.value
  var dniValue = dniInput.value
  var emailValue = emailInput.value
  var lastNameValue = lastNameInput.value

  var student = {
    dni: dniValue,
    firstName: firstName,
    email: emailValue,
    lastName: lastNameValue
  }

  studentsList.push(student)
  var liStudent = createStudentNode(student)

  mainListNode.appendChild(liStudent)

  setLocalList('listStudents', studentsList)

  firstNameInput.value = ''
  dniInput.value = ''
  emailInput.value = ''
  lastNameInput.value = ''

  addStudentButton.disabled = true

  firstNameInput.classList.remove('is-valid')
  dniInput.classList.remove('is-valid')
  emailInput.classList.remove('is-valid')
}

function validateRequired (event) {
  var inputNode = event.target

  var value = inputNode.value

  if (!value) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
  validateAddButton()
}

function validateDni (event) {
  // Encuetro que nodo disparó el evento blur
  var inputNode = event.target

  // Busco que valor tenía el nodo en ese momento
  var value = inputNode.value

  // Trato de convertir a número
  var parsedValue = parseInt(value, 10)

  // Verifico si existe el DNI en los datos guardados en LS
  var dniExists

  if (searchStudentIndexByDni(value, studentsList) !== -1) {
    dniExists = true
  } else {
    dniExists = false
  }

  if (!value || isNaN(parsedValue) || parsedValue <= 0 || dniExists) {
    // Caso invalido
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    // Caso valido
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }

  validateAddButton()
}

function emailValidation (event) {
  var inputNode = event.target
  var inputValue = inputNode.value

  if (
    inputValue.indexOf('@') === -1 ||
    (inputValue.indexOf('.') === -1 || !inputValue)
  ) {
    emailInput.classList.add('is-invalid')
    emailInput.classList.remove('is-valid')
  } else {
    emailInput.classList.add('is-valid')
    emailInput.classList.remove('is-invalid')
  }
  validateAddButton()
}

function validateAddButton () {
  var validInputs = document.getElementsByClassName('is-valid')

  if (validInputs.length !== 3) {
    addStudentButton.disabled = true
  } else {
    addStudentButton.disabled = false
  }
}

function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  } else {
  }
}

function getLocalList (key) {
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

function createStudentNode (newStudent) {
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
  liNode.className = 'list-group-item'
  liNode.id = newStudent.dni

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

function searchStudentIndexByDni (dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }
  return index
}
function searchStudent () {
  var searchValue = searchInput.value
  if (searchValue) {
    var index = searchStudentIndexByText(searchValue, studentsList)
    if (index !== -1) {
      console.log(index)
      var searchStudent = studentsList[index]
      var liSearch = createStudentNode(searchStudent)
      searchListNode.appendChild(liSearch)
    }
  }

  function searchStudentIndexByText (text, studentsList) {
    var index = -1
    for (var i = 0; i < studentsList.length; i++) {
      var student = studentsList[i].firstName
      var upperStudent = student.toUpperCase()
      var upperText = text.toUpperCase()
      if (upperStudent === upperText) {
        index = i
        break
      }
    }
    return index
  }
}
