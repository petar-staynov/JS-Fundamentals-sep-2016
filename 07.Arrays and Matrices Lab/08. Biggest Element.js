function biggestElement(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));

    var biggestNum = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < matrix.length; row++)
    {
        var cols = matrix[row];
        for (let col = 0; col <cols.length; col++)
        {
            biggestNum = Math.max(matrix[col], biggestNum);
        }
    }
    console.log(biggestNum)
}
biggestElement(['20 50 10', '8 33 145']);
