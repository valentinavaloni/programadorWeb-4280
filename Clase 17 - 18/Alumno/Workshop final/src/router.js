import crossroads from 'crossroads'

import contactController from './js/controllers/contactController'
import localStorageController from './js/controllers/localStorageController'
import searchController from './js/controllers/searchController'
import peopleController from './js/controllers/peopleController'

function router () {
  crossroads.addRoute('#/search', function () {
    $('#root').load('./partials/people.html', searchController)
  })

  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactController)
  })

  crossroads.addRoute('#/contact/greetings', function () {
    $('#root').load('./partials/greetings.html')
  })

  crossroads.addRoute('#/local-storage', function () {
    $('#root').load('./partials/local-storage.html', localStorageController)
  })

  crossroads.addRoute('#/people', function () {
    $('#root').load('./partials/people.html', peopleController)
  })

  crossroads.addRoute('/', function () {
    $('#root').load('./partials/home.html')
  })

  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
