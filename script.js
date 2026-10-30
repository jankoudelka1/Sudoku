let board = document.getElementById("sudoku");

for (let i = 0; i < 81; i++) {
    let cell = document.createElement("input");
    cell.type = "text";
    cell.maxLength = 1;
    cell.size = 1;

    board.appendChild(cell);

    if ((i + 1) % 9 === 0) {
        let br = document.createElement("br");
        board.appendChild(br);
    }
}