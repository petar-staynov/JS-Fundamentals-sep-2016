function main(input) {
    console.log(input);
    let decoderSize = Number(input.shift());
    console.log('decoder rows = ' + decoderSize);
    //WORKS

    let decoderStr = [];
    console.log(input);
    for (let i = 0; i < decoderSize; i++){
        decoderStr.push(input.shift(i).split(' ').map(Number));
    }

    console.log(decoderStr);

    let matrix = input.map(row => row.split(' ').map(Number));
    console.log(matrix);//WORKS

    let result = [];

    //decoder block walker
    // console.log("decode block walker")
    for (let row = 0; row < matrix.length; row+=decoderSize) {
        let cols = matrix[row];
        for (let col = 0; col < cols.length+1; col+=decoderStr.length) {
            // console.log('row = ' + row);
            // console.log('col = ' + col);

            //Check decoder row out of bounds
            let insideRowEndIndex = row+decoderSize;
            // console.log(`rows.lenght ${matrix.length}`);
            // console.log(`insideRowEndIndex ${insideRowEndIndex}`);
            // console.log(Math.abs(matrix.length - insideRowEndIndex));
            if (row + decoderSize > matrix.length) {
                // console.log("enter row if");
                insideRowEndIndex = insideRowEndIndex - Math.abs(matrix.length - insideRowEndIndex);
                // console.log(`if insideRowEndIndex ${insideRowEndIndex}`);
            }

            let decPos = 0;
            // console.log('inside matrix start');
            for (let insideRow = row; insideRow < insideRowEndIndex; insideRow++){
                console.log(`row = ${row} insideRow = ${insideRow} insideRowEndIndex = ${insideRowEndIndex}`);

                //Check decoder col out of bounds
                let insideCols = matrix[insideRow];
                let insideColEndIndex = col+decoderStr.length;
                // if (col+insideColEndIndex > cols.length) insideColEndIndex = insideColEndIndex - Math.abs(cols.length-insideColEndIndex);
                // console.log(`cols.lenght = ${cols.length}`);
                // console.log(`insideColEndIndex = ${insideColEndIndex}`);

                for (let insideCol = col; insideCol<insideColEndIndex; insideCol++)
                {
                    console.log(`col = ${col} insideCol = ${insideCol} insideColEndIndex = ${insideColEndIndex}`);
                    if (matrix[insideRow][insideCol] != undefined) {
                        console.log(`element = ${matrix[insideRow][insideCol]} decEle = ${decoderStr[decPos]}`);
                        matrix[insideRow][insideCol] = Number(matrix[insideRow][insideCol])+Number(decoderStr[decPos]);
                        console.log(`new value = ${matrix[insideRow][insideCol]}`);

                        if (Number(matrix[insideRow][insideCol]) >= 27) {
                            matrix[insideRow][insideCol] =
                                Number(matrix[insideRow][insideCol]) % 27;
                        }
                            switch (Number((matrix[insideRow][insideCol]))){
                                case 0: matrix[insideRow][insideCol] = ' '; break;
                                case 1: matrix[insideRow][insideCol] = 'A'; break;
                                case 2: matrix[insideRow][insideCol] = 'B'; break;
                                case 3: matrix[insideRow][insideCol] = 'C'; break;
                                case 4: matrix[insideRow][insideCol] = 'D'; break;
                                case 5: matrix[insideRow][insideCol] = 'E'; break;
                                case 6: matrix[insideRow][insideCol] = 'F'; break;
                                case 7: matrix[insideRow][insideCol] = 'G'; break;
                                case 8: matrix[insideRow][insideCol] = 'H'; break;
                                case 9: matrix[insideRow][insideCol] = 'I'; break;
                                case 10: matrix[insideRow][insideCol] = 'J'; break;
                                case 11: matrix[insideRow][insideCol] = 'K'; break;
                                case 12: matrix[insideRow][insideCol] = 'L'; break;
                                case 13: matrix[insideRow][insideCol] = 'M'; break;
                                case 14: matrix[insideRow][insideCol] = 'N'; break;
                                case 15: matrix[insideRow][insideCol] = 'O'; break;
                                case 16: matrix[insideRow][insideCol] = 'P'; break;
                                case 17: matrix[insideRow][insideCol] = 'Q'; break;
                                case 18: matrix[insideRow][insideCol] = 'R'; break;
                                case 19: matrix[insideRow][insideCol] = 'S'; break;
                                case 20: matrix[insideRow][insideCol] = 'T'; break;
                                case 21: matrix[insideRow][insideCol] = 'U'; break;
                                case 22: matrix[insideRow][insideCol] = 'V'; break;
                                case 23: matrix[insideRow][insideCol] = 'W'; break;
                                case 24: matrix[insideRow][insideCol] = 'X'; break;
                                case 25: matrix[insideRow][insideCol] = 'Y'; break;
                                case 26: matrix[insideRow][insideCol] = 'Z'; break;
                                }
                        }
                        decPos++;
                    }
                decPos++;
                }
            }
        }
        let resultString = [];
    for (let row = 0; row < matrix.length; row++) {
        let cols = matrix[row];
        for (let col = 0; col < cols.length; col++) {
            resultString.push(matrix[row][col]);
        }
    }
    console.log(resultString.join(''));
}

// main(['1',
// '1 3 13',
// '12 22 14 13 25 0 4 24 23',
// '18 24 2 25 22 0 0 11 18',
// '8 25 6 26 8 23 13 4 14',
// '14 3 14 10 6 1 6 16 14',
// '11 12 2 10 24 2 13 24 0',
// '24 24 10 14 15 25 18 24 12',
// '4 24 0 8 4 22 19 22 14',
// '0 11 18 26 1 19 18 13 15',
// '8 15 14 26 24 14 26 24 14',]);

main([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]);

// main([ '2',
//     '31 32',
//     '74 37',
//     '19 0 23 25',
//     '22 3 12 17',
//     '5 9 23 11',
//     '12 18 10 22' ]);