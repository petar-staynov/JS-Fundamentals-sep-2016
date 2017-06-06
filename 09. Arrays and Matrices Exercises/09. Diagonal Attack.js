function program(input) {
    input = input.map(row => row.split(' ').map(Number));

    // console.log(input);
    let sum1 = 0;
    let sum2 = 0;

    for (let row = 0; row < input.length; row++) {
        sum1 += input[row][row];
        sum2 += input[row][input.length - row - 1];
    }

    if (sum1 !== sum2) {
        console.log(
            input.map(row => row.join(' '))
                .join('\n'));
    }

    else {
        //Fill matrix
        let matrix = [[]];
        for (let row = 0; row < input.length; row++) {
            matrix.push([]);
            for (let col = 0; col < input[row].length; col++) {
                matrix[row].push(sum1);
            }
        }
        matrix.pop();

        //Diagonal filler
        for (let rowCol = 0; rowCol < input.length; rowCol++) {
            matrix[rowCol][rowCol] = input[rowCol][rowCol];
            matrix[rowCol][input.length - rowCol - 1]  = input[rowCol][input.length - rowCol - 1];
        }

        //Matrix printer
        console.log(
            matrix.map(row => row.join(' '))
                .join('\n'));
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