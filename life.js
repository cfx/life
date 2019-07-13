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
  ctx.fillStyle = 'black';

  // 0 - dead cell
  // 1 - alive cell

  let Board = []

  var Cell = function(x, y, state) {
    return {
      x: x,
      y: y,
      state: state
    }
  }

  var getCell = function(x, y) {
    return Board[x][y]
  }

  for (let x = 0; x < WIDTH; x++) {
    let arrY = []
    for (let y = 0; y < HEIGHT; y++) {
      arrY.push(Cell(x, y, DEAD))
    }
    Board.push(arrY)
  }

  ctx.fillRect(1, 1, 1, 1);
  document.body.appendChild(cnv)
})
