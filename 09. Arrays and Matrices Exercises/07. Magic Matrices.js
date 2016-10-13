function main(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    // console.log(matrix);
    
    let sums = [];
    let colSum = 0;
    let rowSum = 0;


    //CALCULATES SUM OF ROWS
    for (let row = 0; row < matrix.length; row++)
    {
        let cols = matrix[row];
        for (let col = 0; col < cols.length; col++)
        {
            rowSum += Number(matrix[row][col]); //Adds sum of current row to "sums"  array
            // console.log("ROWSUM "+ matrix[row][col])
        }
        // console.log("rowSum = " + rowSum);

        sums.push(rowSum);
        rowSum = 0;
    }
    //CALCULATES SUM OF COLS
    for (let col = 0; col < matrix.length; col++)
    {
        let rows = matrix[col];
        for (let row = 0; row < rows.length; row++)
        {
            colSum += Number(matrix[row][col]);
            // console.log("COLSUM "+ matrix[row][col])

        }
        // console.log("colSum = " + colSum);
        sums.push(colSum);
        colSum = 0;
    }

    let magical = true;
    for (let num = 1; num < sums.length; num++)
    {
        if(Number(sums[num]) !== Number(sums[num - 1])) magical = false;
    }
    console.log(magical);
}

// main(['4 5 6',
//     '6 5 4',
//     '5 5 5']);

// main(['11 32 45',
//     '21 0 1',
//     '21 1 1']);