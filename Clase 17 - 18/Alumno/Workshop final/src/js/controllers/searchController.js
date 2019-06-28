import { getLocalList, setLocalList } from '../utils/localStorage'

import { genderTranslate, eyeColorTranslate } from '../utils/translates'

import { searchPeopleIndexByUrl } from '../utils/search'

import { getData } from '../utils/ajax'

function searchController () {
  searchPeople()

  var searchButtonNode = $('#searchButton')

  searchButtonNode.click(searchPeople)
}

function searchPeople () {
  var searchInputNode = $('#search')

  var value = searchInputNode.val()

  var startUrl = 'https://swapi.co/api/people/?search=' + value

  var peopleApiList = []

  var peopleLocalList = getLocalList('peopleList')

  var tableBody = $('#tableBody')

  tableBody.empty()

  var seeMoreButton = $('#seeMore')

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
          genderTranslate(person.gender) +
          '</td><td>' +
          person.height +
          ' cm</td><td>' +
          person.mass +
          ' kg</td><td>' +
          eyeColorTranslate(person.eye_color) +
          '</td><td><button type="button" class="btn btn-success">Guardar</button></td></tr>'
      )

      $('#' + order).click(function () {
        var rowNode = $(this)

        var id = rowNode.attr('id')

        var indexLocal = searchPeopleIndexByUrl(
          'https://swapi.co/api/people/' + id + '/',
          peopleLocalList
        )

        if (indexLocal === -1) {
          var indexApi = searchPeopleIndexByUrl(
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

export default searchController
