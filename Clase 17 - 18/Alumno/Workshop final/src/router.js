import crossroads from 'crossroads'

import peopleController from './js/controllers/peopleController'
import contactController from './js/controllers/contactController'
import lsController from './js/controllers/lsController'

function router() {
  crossroads.addRoute('', function() {
    console.log('Home page')
    //Al lado de load le digo donde esta el pedacito de HTML que tiene que traer
    $('#root').load(
      './partials/home.html',
      function() //Cuando se termina de cargar este HTML se llama a  la funcion callback
      {
        console.log('Se cargo la home')
      }
    )
  })

  crossroads.addRoute('#/people', function() {
    $('#root').load('./partials/people.html', peopleController)
  })

  crossroads.addRoute('#/local-storage', function() {
    $('#root').load('./partials/local-storage.html', lsController)
  })

  crossroads.addRoute('#/contact', function() {
    $('#root').load('./partials/contact.html', contactController)
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function() {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
