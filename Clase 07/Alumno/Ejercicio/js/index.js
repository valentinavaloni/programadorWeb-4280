
var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

function setLocalList(key, list) {

  if (typeof key === 'string' && Array.isArray(list)) {

    var strList = JSON.stringify(list)

    localStorage.setItem(key, strList)
  }
}


setLocalList('studentsList', studentsList)

setLocalList('pato', ['Pato', 'Pato', 'Ñato'])
