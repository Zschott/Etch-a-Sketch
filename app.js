const defaultSize = 10;

let currentSize = defaultSize;

const slider = document.getElementById("boxSize");
const gridContainer = document.getElementById("gridContainer");
const displaySize = document.getElementById("displaySize");
const erase = document.getElementById("erase");

makeRows(currentSize)

function makeRows(currentSize) {
  let rows = currentSize;
  let cols = currentSize;
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.setAttribute('class', `gridItem`);
    cell.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(cell);
  };
};

function changeColor(e){
    e.target.style.background = 'grey';
}

erase.onclick = () => {
  gridContainer.textContent = " ";
  makeRows(slider.value, slider.value);
}

displaySize.textContent = `Box Size: ${currentSize} x ${currentSize}`;

slider.oninput = function() {
  currentSize = this.value;
  displaySize.textContent = `Box Size: ${this.value} x ${this.value}`;
  gridContainer.textContent = '';
  makeRows(currentSize);
}