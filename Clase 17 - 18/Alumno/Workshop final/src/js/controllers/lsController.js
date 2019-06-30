import { getLocalList, setLocalList } from '../utils/localStorage'

import translates from '../utils/translate'

import { searchPeopleIndexByUrl } from '../utils/search'

function lsController () {
  console.log('lsController successfully loaded')

  var localPeople = getLocalList('peopleList')

  var tableBodyNode = $('#tableBody')

  var person

  for (var i = 0; i < localPeople.length; i++) {
    person = localPeople[i]

    var url = person.url

    url = url.replace('https://swapi.co/api/people/', '')

    var id = url.replace('/', '')

    tableBodyNode.append(
        '<tr><th scope="row">' +
          id +
          '</th><td>' +
          person.name +
          '</td><td>' +
          translates['es']['gender'][person.gender] +
          '</td><td>' +
          person.height +
          ' cm</td><td>' +
          person.mass +
          ' kg</td><td>' +
          translates['es']['eyeColor'][person.eye_color] +
          '</td><td><button id="' +
          id +
          '" type="button" class="btn btn-danger">Eliminar</button></td></tr>'
      )
    $('#button' + id).click(function () {
      var button = $(this)

      console.log('click')

      var buttonId = button.attr('id')

      var id = buttonId.replace('button', '')

      var newUrl = 'https://swapi.co/api/people/' + id + '/'

      var index = searchPeopleIndexByUrl(newUrl, localPeople)

      if (index !== -1) {
        localPeople.splice(index, 1)

        setLocalList('peopleList', localPeople)

        button.parent().parent().remove()
      }
    })
  }
}

export default lsController
