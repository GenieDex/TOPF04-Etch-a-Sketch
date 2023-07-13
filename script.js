let slider = document.getElementById("tileNum");
let currentColor = document.getElementById("currentColor");
const drawingArea = document.getElementById("drawingArea");

function updateGrid() {
  let squareSize = parseInt(slider.value);
  drawingArea.style.gridTemplateColumns = `repeat(${squareSize}, 1fr)`;
  drawingArea.style.gridTemplateRows = `repeat(${squareSize}, 1fr)`;
  clearGrid();
  createGrid(squareSize);
}

function createGrid(squareSize) {
  for (let i = 0; i < squareSize * squareSize; i++) {
    const div = document.createElement("div");
    div.style.cssText = "border: 1px solid grey;";
    drawingArea.appendChild(div);
    div.addEventListener("click", function (event) {
      event.target.style.backgroundColor = currentColor.value;
    });
  }
}

function clearGrid() {
  drawingArea.innerHTML = "";
}

slider.addEventListener("input", updateGrid);
document.getElementById("clear").addEventListener("click",updateGrid);