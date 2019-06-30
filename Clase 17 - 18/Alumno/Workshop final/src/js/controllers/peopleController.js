import { getData, getAllList } from '../utils/apiData'
import { getLocalList, setLocalList } from '../utils/localStorage'
import translates from '../utils/translate'
import { searchPersonIndexById, searchIndexByUrl } from '../utils/search'

function peopleController () {
  console.log('peopleController successfully loaded')

  var tableBodyNode = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  var apiResults = []

  var localPeople = getLocalList('peopleList')

  getData('https://swapi.co/api/people/', showPeople)

  function showPeople (error, data) {
    if (error) {
    } else {
      var people = data.results

      if (data.results) {
        apiResults = apiResults.concat(data.results)
        console.log(apiResults)
      }

      var person

      for (var i = 0; i < people.length; i++) {
        person = people[i]

        var url = person.url

        var localIndex = searchPeopleIndexByUrl(person.url, localPeople)

        var deleteButton

        url = url.replace('https://swapi.co/api/people/', '')

        var id = url.replace('/', '')

        if (localIndex == -1) {
          var addButton =
            '<td> <button type="button" id = "button' +
            id +
            '" class="btn btn-success">Guardar</button></td>'
        } else {
          addButton =
            '<td> <button type="button" id = "button' +
            id +
            '" class="btn btn-dark disabled">Guardado</button></td>'
        }

        tableBodyNode.append(
          '<tr id="' +
            id +
            '"><th scope="row">' +
            id +
            '</th><td>' +
            person.name +
            '</td><td>' +
            translate(person.gender) +
            '</td><td>' +
            translate(person.height) +
            ' CM</td><td>' +
            translate(person.mass) +
            ' KG</td> <td>' +
            translate(person.eye_color) +
            '</td> <td> ' +
            addButton +
            ' </td> </tr>'
        )

        $('#button' + id).click(function () {
          var button = $(this)

          console.log('click')

          var buttonId = button.attr('id')

          var id = buttonId.replace('button', '')

          var newUrl = 'https://swapi.co/api/people/' + id + '/'

          var index = searchPeopleIndexByUrl(newUrl, apiResults)

          if (index !== -1) {
            var personInfo = apiResults[index]

            localPeople.push(personInfo)

            setLocalList('peopleList', localPeople)

            button.html('Guardado')
            button.removeClass('btn-success')
            button.addClass('btn-dark disabled')
          }
        })
      }
      if (data.next) {
        seeMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        seeMoreButton.remove()
      }
    }
  }
}

export default peopleController