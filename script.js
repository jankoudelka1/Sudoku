let board = document.getElementById("sudoku");

let puzzles = [
    "EC--G----F--AIE----IH----F-H---F---CD--H-C--AG---B---F-F----BH----DAI--E----H--GI",
    "H---F---CD--H-C--AG---B---F-F----BH----DAI--E----H--GIEC--G----F--AIE----IH----F-",
    "-F----BH----DAI--E----H--GIEC--G----F--AIE----IH----F-H---F---CD--H-C--AG---B---"
];

let r = Math.floor(Math.random() * 3);
let puzzle = puzzles[r];

for (let i = 0; i < 81; i++) {
    let cell = document.createElement("input");
    cell.type = "text";
    cell.maxLength = 1;
    cell.size = 1;

    if (puzzle[i] !== "-") {
        cell.value = puzzle[i];
        cell.readOnly = true;
        cell.style.fontWeight = "bold";
    }

    cell.oninput = function() {
        this.value = this.value.toUpperCase();
        if (this.value !== "" && !"ABCDEFGHI".includes(this.value)) {
            this.value = "";
        }
    };

    board.appendChild(cell);

    if ((i + 1) % 9 === 0) {
        let br = document.createElement("br");
        board.appendChild(br);
    }
}