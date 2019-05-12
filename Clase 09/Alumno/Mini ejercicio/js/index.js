var button = document.getElementById('button')

var ageInput = document.getElementById('age')

button.onclick = clickButton

function clickButton() {
  var ageValue = ageInput.value
  if (ageValue >= 18) {
    console.log('El usuario es mayor de edad')
  } else if (ageValue < 18) {
    console.log('El usuario no es mayor de edad')
  }
}