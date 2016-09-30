function diagonalsum(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));

    let sum1 = 0;
    let sum2 = 0;

    for (let row = 0; row < matrix.length; row++)
    {
        sum1 += matrix[row][row];
        sum2 += matrix[row][matrix.length - row - 1];
    }
    console.log(sum1 + ' ' + sum2);
}