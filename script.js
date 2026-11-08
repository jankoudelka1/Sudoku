let board = document.getElementById("sudoku");
//AI Generated, Model: Gemini 3.1 Pro
let puzzles = [
    "EC--G----F--AIE----IH----F-H---F---CD--H-C--AG---B---F-F----BH----DAI--E----H--GI",
    "H---F---CD--H-C--AG---B---F-F----BH----DAI--E----H--GIEC--G----F--AIE----IH----F-",
    "-F----BH----DAI--E----H--GIEC--G----F--AIE----IH----F-H---F---CD--H-C--AG---B---"
];
//AI Generated, Model: Gemini 3.1 Pro
let solutions = [
    "ECDFGHIABFGBIAECDHAIHCDBEFGHEIGFADBCDBFHECGIGACIBDHEFIFAECGBHDBHGDAIFCECDEBHFAGI",
    "HEIGFADBCDBFHECGIGACIBDHEFIFAECGBHDBHGDAIFCECDEBHFAGIECDFGHIABFGBIAECDHAIHCDBEFG",
    "FIFAECGBHDBHGDAIFCECDEBHFAGIECDFGHIABFGBIAECDHAIHCDBEFGHEIGFADBCDBFHECGIGACIBDHE"
];

let r = Math.floor(Math.random() * 3);
let puzzle = puzzles[r];
let solution = solutions[r];

let inputs = [];

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
    inputs.push(cell);

    if ((i + 1) % 9 === 0) {
        let br = document.createElement("br");
        board.appendChild(br);
    }
}

function check() {
    let win = true;
    for (let i = 0; i < 81; i++) {
        if (inputs[i].value !== solution[i]) {
            win = false;
        }
    }
    if (win) {
        alert("Sudoku je spravne!");
    } else {
        alert("Nekde je chyba.");
    }
}