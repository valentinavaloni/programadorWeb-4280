import { getLocalList, setLocalList } from '../utils/localStorage'
import translates from '../utils/translates'
import { searchPeopleUrl } from '../utils/sarchPeople'

function localStorageController () {
  var lang = 'es'

  var peopleList = getLocalList('peopleList')

  var tableBody = $('#tableBody')

  for (var i = 0; i < peopleList.length; i++) {
    var person = peopleList[i]

    var id = person.url.split('/')[5]

    tableBody.append(
      '<tr><th scope="row">' +
        id +
        '</th><td>' +
        person.name +
        '</td><td>' +
        translates[lang]['gender'][person.gender] +
        '</td><td>' +
        person.height +
        ' cm</td><td>' +
        person.mass +
        ' kg</td><td>' +
        translates[lang]['eye_color'][person.eye_color] +
        '</td><td><button id="' +
        id +
        '" type="button" class="btn btn-danger">Eliminar</button></td></tr>'
    )

    var deleteButton = $('.btn-danger')

    deleteButton.click(function () {
      var id = $(this).attr('id')
      var trNode = $(this).parent().parent()

      var index = searchPersonIndexById(id, localList)

      if (index !== -1) {
        localList.splice(index, 1)

        setLocalList('peopleList', peopleList)
      }

      trNode.hide(300, function () {
        trNode.remove()
      })
    })

    console.log(person)
  }
}

/**
 * searchStudentIndexByText permite buscar la posición de un estudiante en el array,
 * comparando nombre o apellido por valor exacto
 * @param {string} text nombre del estudiante
 * @param {Array} studentsList Array de estudiantes
 * @returns {number} posición del estudiante en el Array, si no lo encuentra -1
 */

export default localStorageController
