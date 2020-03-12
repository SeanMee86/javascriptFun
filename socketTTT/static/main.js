const socket = io();
let fullBoard;

window.onload = function() {
    buildGameBoard(3);
    cellClickHandler();
};

const buildGameBoard = (boardSize) => {
    const boardRows = new Array(boardSize);
    fullBoard = [...boardRows]
        .map(_ => [...boardRows]
            .map(_ => 0));
    fullBoard.forEach((row, rowInd) => {
        row.forEach((cell, cellInd) => {
            document.getElementById('gameBoard')
                .innerHTML += `<div col='${cellInd+1}' row="${rowInd+1}" class="gameCell"></div>`
        })
    })
};

const cellClicked = (e) => {
    const row = e.target.getAttribute('row')-1;
    const col = e.target.getAttribute('col')-1;
    fullBoard[row][col] = 1;
    socket.emit('updateBoard', fullBoard);
};

const cellClickHandler = () => {
    Array.from(document.getElementsByClassName('gameCell'))
        .forEach(cell => {
            cell.addEventListener('click', cellClicked);
        })
};

const rebuildBoard = () => {
    document.getElementById('gameBoard').innerHTML = '';
    fullBoard.forEach((row, rowInd) => {
        row.forEach((cell, cellInd) => {
            document.getElementById('gameBoard')
                .innerHTML += `<div col='${cellInd+1}' row="${rowInd+1}" class="gameCell">${cell===1 ? 'X' : ''}</div>`
        })
    });
    cellClickHandler()
};

socket.on('playerDisconnect', _ => {
    document.getElementById('gameBoard').innerHTML = '';
    buildGameBoard(3);
});

socket.on('sendUpdate', board => {
    fullBoard = board;
    rebuildBoard();
});
