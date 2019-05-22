function validateEmail (event) {
  var inputNode = $(this)

  var value = inputNode.val()

  if (!value || value.indexOf('@') === -1 || value.indexOf('.') === -1) {
    inputNode.removeClass('is-valid').addClass('is-invalid')
  } else {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  }
}
