function generateChessboard(root) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let node = document.createElement("div");
            node.classList.add("cell");
            if ((i + j) % 2 === 0) {
                node.classList.add("black");
            } else {
                node.classList.add("white");
            }
            root.appendChild(node);
        }
    }
}


generateChessboard(document.getElementById("chessboard"));