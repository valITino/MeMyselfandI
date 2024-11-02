function generateChessboard() {
    let grid = "";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                grid += "⬛"
            } else {
                grid += "⬜"
            }
        }
        grid += "<br/>";
    }
    return grid;
}


document.getElementById("root").innerHTML = generateChessboard();


