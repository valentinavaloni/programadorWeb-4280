import crossroads from 'crossroads'
import contactController from './controller/contractController';

function router () {
  crossroads.addRoute('', function () {
    $('#root').load('./partials/home.html', function () {
      console.log('Home page')
    })
  })

  crossroads.addRoute('#/people', function () {
    $('#root').load('./partials/people.html', function () {
      console.log('People page')
    })
  })

  crossroads.addRoute('#/local-storage', function () {
    $('#root').load('./partials/local-storage.html', function () {
      console.log('ls page')
    })
  })

  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactController)
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
