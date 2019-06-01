$(document).ready(function () {

  var url = 'https://swapi.co/api/'

  getData(url + 'people/5/', callback)

})

function getData(url, cbk) {
  $.ajax(url)
    .done(function(data) {
      cbk(null, data)
    })
    .fail(function(error) {
      cbk(error)
    })
}

function callback(error, data) {
  if (error) {
    console.log('Hubo un error', error)
  } else {
    console.log('Todo ok', data)
  }
}