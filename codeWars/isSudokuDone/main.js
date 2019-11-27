function doneOrNot(board){
    const arrCheck = '123456789';
    let rowCheck = true;
    let colCheck = true;
    let regionCheck = true;

    //Check that column is clear
    const columns = board
        .map((row, rowIndex) => board
            .map(row => row[rowIndex]));
    columns
        .map(row => row
            .sort((a,b) => a-b)
            .join('') !== arrCheck ? colCheck = false : null);

    //Check that region is clear
    const regions = [[],[],[],[],[],[],[],[],[]];
    for(let i=0; i < board.length; i++){
        for(let j=0; j < board[i].length; j++){
            if(i <= 2 && j <= 2) regions[0].push(board[i][j]);
            if(i <= 2 && (j >=3 && j <= 5 )) regions[1].push(board[i][j]);
            if(i <= 2 && (j >=6 && j <= 8 )) regions[2].push(board[i][j]);
            if((i >= 3 && i <= 5) && j <= 2) regions[3].push(board[i][j]);
            if((i >= 3 && i <= 5) && (j >=3 && j <= 5 )) regions[4].push(board[i][j]);
            if((i >= 3 && i <= 5) && (j >=6 && j <= 8 )) regions[5].push(board[i][j]);
            if((i >= 6 && i <= 8) && j <= 2) regions[6].push(board[i][j]);
            if((i >= 6 && i <= 8) && (j >=3 && j <= 5 )) regions[7].push(board[i][j]);
            if((i >= 6 && i <= 8) && (j >=6 && j <= 8 )) regions[8].push(board[i][j]);
        }
    }
    regions.map(row => row.sort((a,b) => a-b).join('') !== arrCheck ? regionCheck = false : null);

    //Check that row is clear
    board
        .map(row => row
            .sort((a,b) => a-b)
            .join('') !== arrCheck ? rowCheck = false : null);

    //Return Message
    return rowCheck && colCheck && regionCheck ? 'Finished!' : 'Try again!'
}

//Should return finished
const test1 = doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);

//Should return try again
const test2 = doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('test1').innerHTML = test1;
    document.getElementById('test2').innerHTML = test2;
});