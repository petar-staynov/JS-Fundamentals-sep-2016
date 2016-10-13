function main(strings) {
    let input = strings.map(row => row.split(' ').map(Number));
    let rows = input[0][0];
    let cols = input[0][1];
    let starRow = input[1][0];
    let starCol = input[1][1];

    // console.log(rows);
    // console.log(cols);
    // console.log(starRow);
    // console.log(starCol);

    //CREATE SPACE
    let space = [];
    for (let row = 0; row < rows; row++) {
        let rs = []; //row array
        for (let col = 0; col < cols; col++) {
            rs.push(0)
        }
        space.push(rs);
    }
    //END//CREATE SPACE

    //MAP CENTRAL POSITION
    space[starRow][starCol] = 1;

    //MAP ORBITS
    for (let row = 0; row < space.length; row++){
        let cols = space[row];
        for (let col = 0; col < cols.length; col++){
            space[row][col] = Math.max(Math.abs(starRow-row),Math.abs(starCol-col)) + 1;
        }
    }
    space.forEach(row => console.log(row.join(' ')));
}

main(['5 5',
    '2 2']);