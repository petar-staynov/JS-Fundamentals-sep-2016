function program(width, height) {
    let num = 1;
    let matrix = [[]];

    let direction = 'right';
    let row = 0;
    let col = 0;

    let spirals = 0;

    //Matrix filler
    for (let row = 0; row < height; row++) {
        matrix.push([]);
        for (let col = 0; col < width; col++) {
            matrix[row].push(0);
        }
    }
    matrix.pop();


    //Matrix spiral
    let dimesions = width * height + 1;

    for (let element = 0; element < dimesions; element++) {
        if (direction === 'right') {
            matrix[row][col] = num;
            num++;
            col++;
            if (col > width - 1 - spirals) {
                col = width - 1 - spirals;
                row++;
                direction = 'down';
            }
        }
        else if (direction === 'down') {
            matrix[row][col] = num;
            num++;
            row++;

            if (row >= height - spirals) {
                row = height - 1 - spirals;
                col--;
                direction = 'left';
            }
        }
        else if (direction === 'left') {
            matrix[row][col] = num;
            num++;
            col--;

            if (col < spirals) {
                col = spirals;
                row--;
                direction = 'up';
            }
        }
        else if (direction === 'up') {
            matrix[row][col] = num;
            num++;
            row--;

            if (row === spirals) {
                spirals++;
                row = spirals;
                col++;
                direction = 'right';
            }
        }

        if (num === dimesions) {
            console.log(
                matrix.map(row => row.join(' '))
                    .join('\n'));
        }
    }
}


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