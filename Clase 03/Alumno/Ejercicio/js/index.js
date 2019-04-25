var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i]
  var message = 'El '

  switch (daysOfTheWeek) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      message = message + day + ' es día de semana'
      break
    case 'Sábado':
    case 'Domingo':
    case 'Sabado':
      message = message + day + ' es día de fin de semana'
      break
    default:
      message = message + 'no es un día válido'
      break
  }

  console.log(message)
}


