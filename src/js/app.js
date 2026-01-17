document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const img = document.createElement("div");
  img.className = "goblin";
  let currentCell = null;

  function getCell() {
    const index = Math.floor(Math.random() * cells.length);
    return cells[index];
  }

  function movieGoblin() {
    const newCell = getCell();
    if (newCell !== currentCell) {
      currentCell = newCell;
      currentCell.appendChild(img);
    }
  }

  setInterval(movieGoblin, 1000);
});
