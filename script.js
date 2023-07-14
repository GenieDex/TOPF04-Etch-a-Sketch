//DOM variables
let slider = document.getElementById("tileNum");
let currentColor = document.getElementById("currentColor");
const drawingArea = document.getElementById("drawingArea");
let eraser = document.getElementById("eraser");
let rainbowMode = document.getElementById("rainbowMode");



function createGrid(squareSize) {
  //Creates the grid with the selected square size
  for (let i = 0; i < squareSize * squareSize; i++) {
    const div = document.createElement("div");
    div.style.cssText = "border: 1px solid grey;";
    drawingArea.appendChild(div);


    //Color squares. See setColor()
    div.addEventListener("click", setColor);
    //Checks if Eraser mode is activated, use if activated
    eraser.addEventListener("change", function () {
      if (this.checked) {
        div.removeEventListener("click", setColor);
        div.addEventListener("click", eraseColor);
      } else {
        div.removeEventListener("click", eraseColor);
        div.addEventListener("click", setColor);
      }
    });
  }
}

//Deletes the grid
function clearGrid() {
  drawingArea.innerHTML = "";
}

//Deletes and then reloads grid
function updateGrid() {
  let squareSize = parseInt(slider.value);
  drawingArea.style.gridTemplateColumns = `repeat(${squareSize}, 1fr)`;
  drawingArea.style.gridTemplateRows = `repeat(${squareSize}, 1fr)`;
  clearGrid();
  createGrid(squareSize);
}


//Checks if rainbow mode is activated and uses it if checked.
function setColor(event) {
  if (rainbowMode.checked) {
    event.target.style.backgroundColor = rainbowColor();
  } else {
    event.target.style.backgroundColor = currentColor.value;
  }
}

//Sets background color to none when clicked
function eraseColor(event) {
  event.target.style.backgroundColor = "";
}

//Creates three random values, uses them to set a RGB color
function rainbowColor() {
  var RGBColor1 = Math.floor(Math.random() * 256);
  var RGBColor2 = Math.floor(Math.random() * 256);
  var RGBColor3 = Math.floor(Math.random() * 256);
  return `rgb(${RGBColor1}, ${RGBColor2}, ${RGBColor3})`;
}

//Update when changing size
slider.addEventListener("input", updateGrid);
//Updates grid with button
document.getElementById("clear").addEventListener("click", updateGrid);

updateGrid();
