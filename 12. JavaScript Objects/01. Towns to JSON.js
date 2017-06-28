function program(inputArr) {
    let result = [];

    let headings = inputArr.shift().split('|').filter(x => x !== '').map(e => e.trim());

    for (let row of inputArr) {
        row = row.split('|').filter(e => e !== '').map(e => e.trim());

        let head1 = headings[0];
        let town = {
            Town: row[0],
            Latitude: Number(row[1]),
            Longitude: Number(row[2])
        };
        result.push(town);
    }
    console.log(JSON.stringify(result));
}


program(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);