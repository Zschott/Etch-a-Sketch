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

makeRows(32, 32);

function changeColor(e){
    e.target.style.background = 'grey';
}


/* var item = document.getElementById("gridItem");
item.addEventListener("mouseover", colorShift)

function colorShift(){  
   var item = document.getElementById("gridItem");
   item.setAttribute("style", "background-color:gray;")
} */

/*
const gridItem = document.getElementByClassName("gridItem")

gridItem.addEventListener('mouseover', changeColor)

function changeColor(){
    gridItem.setAttribute("id", "background-color : gray;")
}
*/
