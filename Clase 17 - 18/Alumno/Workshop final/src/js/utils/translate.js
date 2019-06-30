function translate (word) {
  switch (word) {
    case 'male':
      return 'Masculino'
      break
    case 'female':
      return 'Femenino'
      break
    case 'blue':
      return 'Azul'
      break
    case 'yellow':
      return 'Amarillo'
      break
    case 'red':
      return 'Rojo'
      break
    case 'brown':
      return 'Marron'
      break
    case 'black':
      return 'Negro'
      break
    case 'orange':
      return 'Naranja'
      break
    case 'hazel':
      return 'Avellana'
      break
    case 'blue-gray':
      return 'Azul-gris'
      break
    case 'hermaphrodite':
      return 'Hermafrodita'
      break
    case 'unknown':
      return '???'
      break
    case 'white':
      return 'Blanco'
      break
    case 'dark':
      return 'Oscuro'
      break
    case 'pink':
      return 'Rosa'
      break
    case 'green, yellow':
      return 'Verde-Amarillo'
      break
    case 'gold':
      return 'Dorado'
      break
    case 'red, blue':
      return 'Rojo-Azul'
      break
    default:
      return word
  }
}

export default translate
