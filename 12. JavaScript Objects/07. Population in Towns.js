function townPopulation(input) {
    let towns = new Map();

    for (let row = 0; row < input.length; row++) {
        let line = input[row];
        line = line.split(' <-> ');

        let town = line[0];
        let population = Number(line[1]);

        if (towns.has(town)){
            towns.set(town, towns.get(town) + population)
        } else {
            towns.set(town, population);
        }
    }

    towns.forEach(function (val, index) {
        console.log(`${index} : ${val}`);
    })
}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
]);