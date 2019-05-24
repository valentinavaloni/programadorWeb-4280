var player = true

var squareNodes = $('.square')

squareNodes.click(squareClick)

function squareClick (event) {
  var squareNode = $(this)

  if (!(squareNode.hasClass('circle') || squareNode.hasClass('cross'))) {
    if (player) {
      squareNode.addClass('circle')
    } else {
      squareNode.addClass('cross')
    }

    player = !player
  }
}
