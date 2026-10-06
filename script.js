const board = document.querySelector(".board");
                                                        const btnSize = document.querySelector("button");
const INITIAL_VALUE = 16;

function drawBoard(gridSize) {

    const gridProportion = 100/gridSize; 

    for (let height = 0; height < Math.pow(gridSize, 2); height++) {

        const grid = document.createElement("div");

        grid.style.flex = `0 0 ${gridProportion}%`

        grid.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = 'black'
        })

        board.appendChild(grid);
    }

}

btnSize.addEventListener("click", () => {
    const newSize = prompt("Qual o tamanho que deseja utilizar?")

    const fields = board.querySelectorAll("div");

    fields.forEach( (field) => {board.removeChild(field)} )

    drawBoard( newSize );
})

drawBoard( INITIAL_VALUE );