/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const clickedCell = board[click[0]][click[1]];
    
    if (!isEndGame(board)) {
        if (clickedCell == 'M') {
            board[click[0]][click[1]] = 'X';
        } else if (clickedCell == 'E') {
            board = revealRecursively(board, click[0], click[1]);
        }
    }
    
    return board;
};

function isEndGame(board) {
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {
            if (board[row][column] == 'E' || board[row][column] == 'M') {
                return false;
            }
        }
    }
    
    return true;
}

function countMinesAround(board, row, column) {
    let minesCount = 0;

    for (let i=-1; i<2; i++) {
        if (row+i < 0 || row+i == board.length) continue;
        for (let j=-1; j<2; j++) {
            if (column+j < 0 || column+j == board[row+i].length) continue;

            if ((i!=0 || j!=0) && (board[row+i][column+j] == 'M' || board[row+i][column+j] == 'X')) {
                minesCount++;
            }
        }
    }
    
    return minesCount;
}

function revealRecursively(board, row, column) {
    if (board[row][column] != 'E') {
        return board;
    }
    
    const minesAround = countMinesAround(board, row, column);
    if (minesAround == 0) {
        board[row][column] = 'B';
        
        for (let i=-1; i<2; i++) {
            if (row+i < 0 || row+i == board.length) continue;

            for (let j=-1; j<2; j++) {
                if (column+j < 0 || column+j == board[row+i].length) continue;

                board = revealRecursively(board, row+i, column+j);
            }
        }
    } else {
        board[row][column] = minesAround.toString();
    }
    
    return board;
}
