var operation = prompt('Ingresá la operación')

var number1 = prompt('Ingrese el primer número')
var number2 = prompt('Ingrese el segundo número')

var parsedNumber1 = parseFloat(number1, 10)
var parsedNumber2 = parseFloat(number2, 10)

switch (operation) {
  case 'multiplicación':
    console.log(
      'El resultado de la multiplicación es ' + parsedNumber1 * parsedNumber2
    )
    break
  case 'suma':
    console.log('El resultado de la suma es ' + (parsedNumber1 + parsedNumber2))
    break
  case 'resta':
    console.log(
      'El resultado de la resta es ' + (parsedNumber1 - parsedNumber2)
    )
    break
  case 'división':
    while (parsedNumber2 === 0) {
      number2 = prompt(
        'El dividendo no puede ser cero, ingrese el segundo de número de nuevo'
      )
      parsedNumber2 = parseFloat(number2, 10)
    }
    console.log(
      'El resultado de la división es ' + parsedNumber1 / parsedNumber2
    )
    break
  default:
    console.log('Operación no valida')
    break
}