// Busco el input en el DOM

var emailInput = document.getElementById('email')

// Agregon la función en el evento blur

emailInput.onblur = validateEmailField

/**
 * validateEmailField recibe como parámetro un evento y valida
 * que el campo sea un mail válido
 * @param {HTMLEvent} event
 */
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
