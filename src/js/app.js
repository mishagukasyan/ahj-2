import image from "./goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const enemy = document.createElement("img");
  enemy.className = "goblin";
  enemy.src = image;

  let currentCell = null;

  function getCell() {
    const index = Math.floor(Math.random() * cells.length);
    return cells[index];
  }

  function movieGoblin() {
    const newCell = getCell();
    if (newCell !== currentCell) {
      currentCell = newCell;
      currentCell.appendChild(enemy);
    }
  }

  setInterval(movieGoblin, 1000);
});