window.addEventListener("load", function(event) {
  const WIDTH  = 50
  const HEIGHT = 50
  const SCALE  = 10

  const ALIVE = 1
  const DEAD  = 0

  var cnv = document.createElement('canvas')

  cnv.setAttribute("width", WIDTH * SCALE)
  cnv.setAttribute("height", HEIGHT * SCALE)
  cnv.setAttribute("style", "border: 2px solid red;")

  var ctx = cnv.getContext('2d');
  ctx.scale(10, 10);

  // 0 - dead cell
  // 1 - alive cell

  let Board = []

  var createCell= function(x, y, state) {
    return {
      x: x,
      y: y,
      state: state
    }
  }

  var updateCell = function(x, y, state) {
    var cell = getCell(x, y)
    cell.state = state

  }

  var getCell = function(x, y) {
    return Board[x][y]
  }

  for (let x = 0; x < WIDTH; x++) {
    let arrY = []
    for (let y = 0; y < HEIGHT; y++) {
      arrY.push(createCell(x, y, DEAD))
    }
    Board.push(arrY)
  }

  var drawBoard = function() {
    for (let x = 0; x < Board.length; x++) {
      for (let y = 0; y < Board[x].length; y++) {
	var cell = getCell(x, y)

	if (cell.state === DEAD) {
	  ctx.fillStyle = 'white';
	} else {
	  ctx.fillStyle = 'black';
	}

	ctx.fillRect(x, y, 1, 1);
      }
    }
  }


  drawBoard()
  document.body.appendChild(cnv)
})
