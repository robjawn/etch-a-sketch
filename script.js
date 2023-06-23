function populateBoard(size){
    let board = document.querySelector(".board");
    board.getElementsByClassName.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.getElementsByClassName.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div")
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square)
    }
}

populateBoard(16)