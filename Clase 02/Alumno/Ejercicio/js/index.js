var dia = prompt('Ingresé el dia')

switch (dia) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('es un día valido')
    break
  case 'sabado':
  case 'domingo':
    console.log('fin de semana')
    break

  default:
    console.log('no es un día valido')
    break

}