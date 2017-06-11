function aggregateTable(input) {
    let cities = [];
    let sum = 0;

    for (let line = 0; line < input.length; line++) {
        input[line] = input[line].split('|');
        input[line].shift();
        input[line][0] = input[line][0].trim();
        input[line][1] = input[line][1].trim();

        cities.push(input[line][0]);
        sum += Number(input[line][1]);
    }

    console.log(cities.join(', '));
    console.log(sum);
}

main(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);