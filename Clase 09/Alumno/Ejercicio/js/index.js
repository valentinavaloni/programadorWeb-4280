console.log('Primer workshop')

//Me creo un array vacío en el scope global para que después la podamos usar.
//Busco si hay algo en el LS y si no hay me devuelve un array vacío-- FUENTE DE VERDAD!
var studentsList = getLocalList('list')

//Busco el campo nombre y DNI en el DOM y lo traigo a JS
var firstNameInput = document.getElementById('firstName')
var dniInput = document.getElementById('dni')
var deleteDniInput = document.getElementById('deleteDni')
var addStudentButton = document.getElementById('addStudentButton')
var mainListNode = document.getElementById('mainList')
var lastNameInput = document.getElementById('lastName')
var emailInput = document.getElementById('email')
var searchListNode = document.getElementById('searchList')
var searchInput = document.getElementById('searchText')
var searchStudentButton = document.getElementById('searchStudentButton')

//Carga inicial de los elementos que estan en el LS en el DOM
for (var i = 0; i < studentsList.length; i++) {
  var student = studentsList[i]
  var liStudent = createStudentNode(student)
  mainListNode.appendChild(liStudent)
}

//Respondo al evento onblur con la funcion que valida el campo nombre y DNI
firstNameInput.onblur = validateFirstName
dniInput.onblur = validateDni
emailInput.onblur = emailValidation

//Con el botón validado, llamo a la función que agrega el estudiante
addStudentButton.onclick = addStudent
deleteStudentButton.onclick = deleteStudent
searchStudentButton.onclick = searchStudent

//TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function searchStudent() {
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

  function searchStudentIndexByText(text, studentsList) {
    var index = -1
    for (var i = 0; i < studentsList.length; i++) {
      var student = studentsList[i].firstName
      var upperStudent = student.toUpperCase()
      var upperText = text.toUpperCase()
      //TODO: ME FALTA PASARLO A MAYUSCULAS
      if (upperStudent === upperText) {
        index = i
        break
      }
    }
    return index
  }
}

function deleteStudent() {
  //Busco el valor en el input a eliminar
  var dniValue = deleteDniInput.value
  if (dniValue) {
    // Busco el indice en memoria
    var index = searchStudentIndexByDni(dniValue, studentsList)

    if (index !== -1) {
      // Elimino en memoria
      studentsList.splice(index, 1)

      // Actualizo la info del local storage con la info en memoria
      setLocalList('list', studentsList)

      var liNode = document.getElementById(dniValue)

      mainListNode.removeChild(liNode)

      deleteDniInput.value = ''
    } else {
      // alert('Usuario NO existente')
      // deleteDniInput.value = ''
    }
  }
}

function addStudent() {
  //levanto los valores ya validados del form
  var firstNameValue = firstNameInput.value
  var dniValue = dniInput.value
  var emailValue = emailInput.value
  var lastNameValue = lastNameInput.value

  //creo un objeto estudiante local
  var student = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    dni: dniValue,
    email: emailValue
  }

  //Agrego el estudiante en memoria (LS)
  studentsList.push(student)

  //Agrego el estudiante en el DOM
  var liStudent = createStudentNode(student)

  //Agrego el nodo a la lista
  mainListNode.appendChild(liStudent)

  //Actualizo la info del LS con la info en memoria
  setLocalList('list', studentsList)

  //Limpiamos el formulario una vez que lo agrega al LS
  firstNameInput.value = ''
  lastNameInput.value = ''
  dniInput.value = ''
  emailInput.value = ''

  //vuelvo a deshabilitar el botón
  addStudentButton.disabled = true

  //Saco las clases válidas
  firstNameInput.classList.remove('is-valid')
  dniInput.classList.remove('is-valid')
  emailInput.classList.remove('is-valid')
}

function validateFirstName(event) {
  var inputNode = event.target //target es la propiedad, y event es un nombre generico, puedo poner cualquier cosa. Me avisa en qué campo el usuario hizo click o escribió algo. Me guardo esto en la var inputNode para ver exactamente en qué elemento fue que el usuario hizo algo

  var value = inputNode.value //Busco qué valor tenía el nodo en ese momento

  if (!value) {
    //caso invalido
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    //caso válido
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateAddButton()
}

function validateDni(event) {
  // Encuetro que nodo disparó el evento blur
  var inputNode = event.target

  // Busco que valor tenía el nodo en ese momento
  var value = inputNode.value

  // Trato de convertir a número
  var parsedValue = parseInt(value, 10) //Trato de convertir a número

  //verifico si existe el DNI en los datos guardados en local Storage
  var dniExists = false
  if (searchStudentIndexByDni(value, studentsList) !== -1) {
    dniExists = true
  }

  if (!value || isNaN(parsedValue) || parsedValue <= 0 || dniExists) {
    //caso inválido
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    //caso válido
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateAddButton()
}

function emailValidation(event) {
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

//Función para validar si todos los campos son validos y habilitar el boton
function validateAddButton() {
  var validInputs = document.getElementsByClassName('is-valid') //Busco todos los campos válidos

  if (validInputs.length !== 3) {
    //como tengo 2 campos, me tengo que fijar que los campos válidos que encuentra sean todos (osea 2) para habilitar el botón
    addStudentButton.disabled = true
  } else {
    addStudentButton.disabled = false
  }
}

//Guarda un array en formato JSON en el localStorage
function setLocalList(key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var stringyTestList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, stringyTestList)
  }
}

//Busca en la localStorage si hay algo, me lo trae en formato JS y si no hay nada me trae un aray vacío
function getLocalList(key) {
  if (typeof key === 'string') {
    var localList = localStorage.getItem(key)
    if (localList) {
      var parsedLocalList = JSON.parse(localList)
      return parsedLocalList
    } else {
      return []
    }
  }
}

//devuelve un nodo li con los datos del alumno pasado por parámetro
function createStudentNode(newStudent) {
  // Creo el nodo li

  var li = document.createElement('li')

  var fullName = ''

  if (newStudent.firstName && newStudent.lastName) {
    fullName = newStudent.firstName + ' ' + newStudent.lastName
  } else if (newStudent.firstName) {
    fullName = newStudent.firstName
  } else if (newStudent.lastName) {
    fullName = newStudent.lastName
  }

  li.innerHTML =
    '<h1>' +
    fullName +
    '</h1><h3>DNI: ' +
    newStudent.dni +
    '</h3><p>E-mail: ' +
    newStudent.email +
    '</p>'
  li.className = 'list-group-item'
  li.id = newStudent.dni

  // Devuelvo solo el nodo con todos sus datos
  return li
}

function searchStudentIndexByDni(dni, studentsList) {
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









var cpInput = document.getElementById('cp')

cpInput.onblur = validateCp

function validateCp(event) {
  var inputNode = event.target
  var inputValue = inputNode.value

  var parsedInoutValue = 

  if (!inputValue || validateCp > 1000 || (validateCp < 9999)) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }


  checkButtonValidation()
}

function checkButtonValidation() {
  var validInputs = document.getElementsByClassName('is-valid')

  if (validInputs.length === 1) {
    button.disabled = false
  } else {
    button.disabled = true
  }
}
