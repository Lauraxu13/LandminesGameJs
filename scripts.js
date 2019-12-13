"use strict";

//randomly assiging a cell as "it"
// need to selector all because if it was just selector it would only grab the first cell
let cells = document.querySelectorAll(".cell");
cells[Math.floor(Math.random() * 16)].id = "it";

// on click color of boxes change to green

let section = document.querySelector(".grid");
section.addEventListener("click", clicked);
function clicked(e) {
    // 1. target "it" grid first
  if (event.target.id === "it") {
    event.target.style.backgroundColor = "red";
    //2. looking for clicked cells (marked in #5) then changeing them to yellow second
       for (let click of document.querySelectorAll(".clicks")) {
        click.style.backgroundColor = "yellow";
      }
      //3. ends the clicking if "it" is found thrid
      section.removeEventListener("click", clicked);
      
    // 4. if none of the top conditions are met then cell goes green fourth 
    //*reason for "event.target.classList.contains("cell")" is so it targets only cells and not the whole grid. other wise it would also "click the lines between the border/grid which is total element"
  } else if (event.target.classList.contains("cell")) {
    event.target.style.backgroundColor = "green";
    // 5. adds calss to cells that are clicked (affects #2) Last
    event.target.classList.add("clicks");
  }
}

