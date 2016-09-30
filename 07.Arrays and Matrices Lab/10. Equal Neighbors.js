function neighbours(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(String));
    // console.log(matrix);

    let neighbours = 0;

    for (let row = 0; row < matrix.length; row++)
    {
        let cols = matrix[row];
        for (let col = 0; col < cols.length; col++)
        {
            if (row < matrix.length - 1)
            {
                if (matrix[row][col] == matrix[row + 1][col])
                {
                    neighbours++;
                    // console.log(matrix[row][col]);
                }
            }
            if (matrix[row][col] == matrix[row][col + 1])
            {
                neighbours++;
                // console.log(matrix[row][col]);
            }
        }
    }
    console.log(neighbours);
}

neighbours(['test yes yo ho', 'well done yo 6', 'not done yet 5']);

