import goblin_png from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {

  const gameСontainer = document.createElement("div");
  const body =  document.body;
  gameСontainer.classList.add("game-container");

  for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement('div');    
    newDiv.className = 'cell';    
    gameСontainer.append(newDiv);
    }
  
  body.append(gameСontainer);

  const cells = document.querySelectorAll(".cell");
  
  const img = document.createElement('img');
  img.src = goblin_png; 
  img.alt = "Это гоблин!!!";    

  let currentCell = null;
  
  function getCell() {
    const index = Math.floor(Math.random() * cells.length);
    return cells[index];
  }

  function movieGoblin() {

    if (currentCell) {
      let _img = currentCell.querySelector("img");
      if (_img){
        //console.log("Есть рисунок в текущей ячейке!!!");
        currentCell.removeChild(img);
      }      
    }
    const newCell = getCell();             
    if (newCell !== currentCell) {
      currentCell = newCell;      
      currentCell.append(img);      
    }
  }

  let timerId = setInterval(movieGoblin, 1000);
  setTimeout(() => { clearInterval(timerId); alert("Игра окончена!"); }, 15000);

});