function main(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));

    //DIAGONAL SUMMATION
    let sum1 = 0;
    let sum2 = 0;

    let diagonal1 = [];
    let diagonal2 = [];

    let diagEqual = true;
    for (let row = 0; row < matrix.length; row++) {
        sum1 += matrix[row][row];
        diagonal1.push(matrix[row][row]);
        sum2 += matrix[row][matrix.length - row - 1];
        diagonal2.push(matrix[row][matrix.length - row - 1]);
    }
    if (sum1 !== sum2) diagEqual = false;
    //END//DIAGONAL SUMMATION

    if (diagEqual){
        var result = [];
        //FILL RESULT WITH DIAGONAL NUMBER
        for (let row = 0; row < matrix.length; row++) {
            result[row] = [];
            for (let col = 0; col <matrix[row].length; col++) {
                result[row][col] = sum1;
            }
        }

        //FILL RESILT WITH ORIGINAL DIAGONALS
        for (let pos = 0; pos < matrix.length; pos++){
            result[pos][pos] = diagonal1[pos];
            result[pos][result.length - pos - 1] = diagonal2[pos];
        }
        result.forEach(row => console.log(row.join(' ')));
    }

    else if (!diagEqual) {
        matrix.forEach(row => console.log(row.join(' ')));
    }
}
// main(['1 1 1',
//     '1 1 1',
//     '1 1 0']);

main(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);