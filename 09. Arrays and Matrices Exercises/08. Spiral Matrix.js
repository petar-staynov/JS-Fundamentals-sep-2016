// function main(input) {
//     let matrixRows = Number(input[0]);
//     let matrixCols = Number(input[1]) ;
//
//     let matrix = [];
//     for (let row = 0; row < matrixRows; row++) {
//         matrix[row] = [];
//         for (let col = 0; col < matrixCols; col++) {
//             matrix[row][col] = 0;
//         }
//     }
//
//     var num = 1;
//
//     let right = true;
//     let down = false;
//     let left = false;
//     let up = false;
//
//     let rightCount = 0;
//     let downCount = 0;
//     let leftCount = 0;
//     let upCount = 0;
//
//     var num = 1;
//     var row = 0;
//     var col = 0;
//
//     let run = true;
//     do {
//         // console.log(run);
//         if (right) {
//             if (col == matrixCols - rightCount) {
//                 right = false;
//                 down = true;
//                 rightCount++;
//                 break;
//             }
//             // console.log("row = " + row + "col = " + col);
//             matrix[row][col] = num;
//             num++;
//             col++;
//             matrix.forEach(row => console.log(row.join(' ')));
//         }
//         if (down) {
//             if (row == matrixRows - downCount) {
//                 down = false;
//                 left = true;
//                 downCount++;
//                 break;
//             }
//             // console.log("row = " + row + "col = " + col);
//             num++;
//             row++;
//             matrix[row][col] = num;
//             matrix.forEach(row => console.log(row.join(' ')));
//         }
//         if (left) {
//             if(col == 0 + leftCount)
//             {
//                 left = false;
//                 up = true;
//                 leftCount++;
//                 break;
//             }
//             num++;
//             col--;
//             matrix[row][col] = num;
//             matrix.forEach(row => console.log(row.join(' ')));
//
//         }
//         if (up){
//             if (row == 1 + upCount){
//                 up = false;
//                 right = true;
//                 upCount++;
//                 break;
//             }
//             num++;
//             row--;
//             matrix[row][col] = num;
//             matrix.forEach(row => console.log(row.join(' ')));
//         }
//     }
//     while (run == true)
// }
// main(['5', '5']);


//NOT MINE
function spiralMatrix([arr]) {
    printMatrix(getMatrix(arr));

    function getMatrix(arr) {
        let [rows, cols] = arr.split(' ').map(Number);

        let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows-1, cols-1];
        let matrix = [];

        for (let r = 0; r < rows; r++) matrix[r] = [];
        while (count < maxCount) {
            for (let c = minCol; c <= maxCol && count < maxCount; c++)	matrix[minRow][c] = ++count;
            minRow++;
            for (let r = minRow; r <= maxRow && count < maxCount; r++)	matrix[r][maxCol] = ++count;
            maxCol--;
            for (let c = maxCol; c >= minCol && count < maxCount; c--)	matrix[maxRow][c] = ++count;
            maxRow--;
            for (let r = maxRow; r >= minRow && count < maxCount; r--)	matrix[r][minCol] = ++count;
            minCol++;
        }
        return matrix;
    }

    function printMatrix(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
        // console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}
spiralMatrix(['5 5']);