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
    gridContainer.appendChild(cell).className = "gridItem";
  };
};

makeRows(16, 16);

/* var item = document.getElementById("gridItem");
item.addEventListener("mouseover", colorShift)

function colorShift(){  
   var item = document.getElementById("gridItem");
   item.setAttribute("style", "background-color:gray;")
} */

div.gridItem.addEventListener('onmouseover', function (e){
    e.target.style.background = 'gray';
})


/*
const container = document.getElementById("grid-container");
const row = document.createElement("div");
const cell = document.createElement("div");

function createGrid() {
    for (let i = 0; i < 16; i++) {
      row.classList.add("row");
      container.appendChild(row);
      for (let j = 0; j < 16; j++) {
        cell.classList.add("cell");
        row.appendChild(cell);
      }
    }
  }
*/