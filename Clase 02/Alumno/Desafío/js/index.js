var message

var genero = prompt('Ingresé su genero')

var edad = prompt('Ingresé su edad')

if (genero === 'Sr. ') {
  message = genero
} else {
  if (genero === 'Sra. ') {
    message = genero
  } else {
    if (genero === 'Sx ')
      message = genero
  }
}

if (edad >= 18) {
  message = message + 'usted es mayor de edad puede ingresar'
} else {
  if (edad < 18) {
    message = message + 'usted es menor de edad no puede ingresar'
  }
}
console.log(message)

