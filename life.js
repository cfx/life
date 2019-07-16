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

  var createCell= function(x, y) {
    return {
      x: x,
      y: y,
      state: DEAD,
      nextState: DEAD,
    }
  }

  var getCell = function(x, y) {
    var row = Board[x]

    if (row) {
      var cell = row[y]
      return cell ? cell : { state: DEAD}
    } else {
      return { state: DEAD }
    }
  }

  var resolveCell = function(x, y) {
    var cell = getCell(x, y),
	state = cell.state,

	N  = getCell(x, y-1).state,
	NE = getCell(x+1, y-1).state,
	E  = getCell(x+1, y).state,
	SE = getCell(x+1, y+1).state,
	S  = getCell(x, y+1).state,
	SW = getCell(x-1, y+1).state,
	W =  getCell(x-1, y).state,
	NW = getCell(x-1, y-1).state,

	sum = N + NE + E + SE + S + SW + W + NW

    if (sum === 2) {
    } else if (sum === 3) {
      cell.nextState = ALIVE
    } else {
      cell.nextState = DEAD
    }
  }

  var createBoard = function() {
    for (let x = 0; x < WIDTH; x++) {
      let arrY = []
      for (let y = 0; y < HEIGHT; y++) {
        arrY.push(createCell(x, y))
      }
      Board.push(arrY)
    }
  }

  var drawBoard = function() {
    for (let x = 0; x < Board.length; x++) {
      for (let y = 0; y < Board[x].length; y++) {
	var cell = getCell(x, y)

	if (cell.nextState === DEAD) {
	  ctx.fillStyle = 'white';
	} else {
	  ctx.fillStyle = 'black';
	}

	cell.state = cell.nextState
	ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  var nextGeneration = function() {
    for (let x = 0; x < Board.length; x++) {
      for (let y = 0; y < Board[x].length; y++) {
	resolveCell(x, y)
      }
    }

    drawBoard()
  }

  createBoard()

  getCell(13, 15).nextState = ALIVE
  getCell(14, 15).nextState = ALIVE
  getCell(15, 15).nextState = ALIVE
  getCell(14, 16).nextState = ALIVE

  drawBoard()
  document.body.appendChild(cnv)

  document.getElementById("next").addEventListener("click", function(e) {
    nextGeneration()
  })
})
