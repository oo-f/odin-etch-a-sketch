const chooseSize = document.getElementById("chooseSize");
const clearAll = document.getElementById("clear");
const main = document.getElementById("main");
const containerSize = 400;

 
const createGrid = (rows, cols) => {
    main.innerHTML = "";

    const cellSize = (containerSize - (rows - 1) * 0) / rows;

    for (let row = 0; row < rows; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.className = "row";

      for (let col = 0; col < cols; col++) {
        const div = document.createElement("div");
        div.className = "cell";
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;


        div.addEventListener("mouseover", function() {
        div.style.backgroundColor = "#000";
      });   

        rowDiv.appendChild(div); 
      }

      main.appendChild(rowDiv);
    }
}

createGrid(100, 100);

chooseSize.addEventListener("click", function() {
  const rows = prompt("Amount of Rows");
  const cols = prompt("Amount of Columns");

  if (rows > 100 || cols > 100) {
    alert("100 is the max, sorry");
  } else if (rows && cols) {
    createGrid(Number(rows), Number(cols));
  }
});  

  clearAll.addEventListener("click", function() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => { 
      cell.style.backgroundColor = "#fff";
   });
});