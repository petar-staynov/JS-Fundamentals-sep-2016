function main(text) {
    let list = [];
    let sum = 0;

    for (let line of text)
    {
        let townData = line.split('|');
        // console.log(townData);
        let townName = townData[1].trim();
        // console.log(townName);
        list.push(townName);
        let income = Number(townData[2].trim());
        // console.log(income);
        sum += income;
    }
    console.log(list.join(', '));
    console.log(sum);
}

main(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);