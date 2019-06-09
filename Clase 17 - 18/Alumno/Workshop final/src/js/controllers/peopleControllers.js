import { getLocalList, setLocalList } from '../utils/localStorage'

import { genderTranslate, eyeColorTranslate } from '../utils/translates'

import { searchPeopleUrl } from '../utils/sarchPeople'

import { getData, getAllList } from '../utils/apiData'

function peopleController () {
  
  var peopleApiList = []

  var peopleLocalList = getLocalList('peopleList')

  var tableBody = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  var startUrl = 'https://swapi.co/api/people/'

  searchPeople(startUrl)

  function searchPeople (url) {
    getData(url, function (error, data) {
      if (data.results) {
        appendPeople(data.results)
        peopleApiList = peopleApiList.concat(data.results)
      }

      if (!error && data) {
        seeMoreButton.one('click', function () {
          searchPeople(data.next)
        })
      } else {
        seeMoreButton.parent().remove()
      }
    })
  }

  function appendPeople (peopleList) {
    var lang = 'es'
    var person

    for (var i = 0; i < peopleList.length; i++) {
      person = peopleList[i]

      var order = person.url.split('/')[5]

      tableBody.append(
        '<tr id="' +
          order +
          '"><th scope="row" >' +
          order +
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
          '</td><td><button type="button" class="btn btn-success">Guardar</button></td></tr>'
      )

      $('#' + order).click(function () {
        var rowNode = $(this)

        var id = rowNode.attr('id')

        var indexLocal = searchPeopleUrl(
          'https://swapi.co/api/people/' + id + '/',
          peopleLocalList
        )

        if (indexLocal === -1) {
          var indexApi = searchPeopleUrl(
            'https://swapi.co/api/people/' + id + '/',
            peopleApiList
          )

          peopleLocalList.push(peopleApiList[indexApi])

          setLocalList('peopleList', peopleLocalList)

          rowNode.remove()
        }
      })
    }
  }
}

export default peopleController
