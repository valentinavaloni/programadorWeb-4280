var emailInput = document.getElementById('email')

emailInput.onblur = validateEmailField

function validateEmail (event) {
  var inputNode = event.target

  if (
    !inputNode.value ||
    inputNode.value.indexOf('@') === -1 ||
    inputNode.value.indexOf('.') === -1
  ) {
    emailInput.classList.remove('is-valid')
    emailInput.classList.add('is-invalid')
  } else {
    emailInput.classList.remove('is-invalid')
    emailInput.classList.add('is-valid')
  }
}
