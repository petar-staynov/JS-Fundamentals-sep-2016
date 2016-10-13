function main(input) {
    let matrixRows = Number(input[0]);
    let matrixCols = Number(input[1]);

    let matrix = [[],[]];
    let num = 1;

    let right = true;
    let down = false;
    let left = false;
    let up = false;

    let rightCount = 0;
    let downCount = 0;
    let leftCount = 0;
    let upCount = 0;

    var row = 0;
    var col = 0;

    let run = true;
    do {
        console.log(run);
        if (right) {
            if (col == matrixCols - 1 - rightCount) {
                right = false;
                down = true;
                rightCount++;
            }
            console.log("row = " + row + "col = " + col);
            matrix[row][col] = num;
            num++;
            col++;
            console.log(matrix);
        }
        if (down) {
            if (row == matrixRows - 1 - downCount) {
                down = false;
                left = true;
                downCount++;
            }
            console.log("row = " + row + "col = " + col);
            num++;
            row++;
            matrix[row][col] = num;
            console.log(matrix);
        }
        if (left) {
            if(col == 0 + leftCount)
            {
                left = false;
                up = true;
                leftCount++;
            }
            num++;
            col++;
            matrix[row][col] = num;
        }
        if (up){
            if (row == 0 + upCount){
                up = false;
                right = true;
                upCount++;
            }
            num++;
            row--;
            matrix[row][col] = num;
        }
    }
    while (run == true)
}
main(['5', '5']);