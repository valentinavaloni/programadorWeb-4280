
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
