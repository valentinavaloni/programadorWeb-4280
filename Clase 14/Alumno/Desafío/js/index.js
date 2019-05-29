$(document).ready(function () {
  console.log('Desafio')

   
   var deleteButton = $('.btn-danger')

  
   deleteButton.click(function () {
     var trNode = $(this) .parent() .parent()  
     trNode.hide(350, function () {
       trNode.remover()
    })
  })
})

