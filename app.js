/*
const flexContainer = document.getElementById("flexContainer");

function flexGrid(rows, cols){
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        flexContainer.appendChild(cell).className = "gridItem";
      }; 
      gridItem.style //figure out how ot append style in-line to determine flex-basis


}
*/

const gridContainer = document.getElementById("gridContainer");

function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.setAttribute('class', `gridItem`);
    cell.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(cell);
  };
};

makeRows(10, 10);

function changeColor(e){
    e.target.style.background = 'grey';
}

const clear = document.getElementById("clear");
clear.addEventListener('click', makeRows)


// Slider Value
const slider = document.getElementById("boxSize");
const output = document.getElementById("output");
output.textContent = `Box Size: ${slider.value} x ${slider.value}`;

slider.oninput = function() {
  output.textContent = `Box Size: ${this.value} x ${this.value}`;
  makeRows(this.value, this.value);
}

/*
slider creates size
  size populates slider label
size populates box creation function
  box clears
  box reloads
*/