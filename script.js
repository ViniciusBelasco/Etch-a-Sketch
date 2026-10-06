const board = document.querySelector(".board");
const GRID_SIZE = 16

const squareSize = board.width / GRID_SIZE;

for (let height = 0; height < Math.pow(GRID_SIZE, 2); height++) {

    const grid = document.createElement("div");

    grid.style.width = `${squareSize}px`;
    grid.style.height = `${squareSize}px`;

    grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = 'black'
    })

    board.appendChild(grid);
}