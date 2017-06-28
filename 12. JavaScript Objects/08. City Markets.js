function cityMarkets(input) {
    let summary = new Map();

    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        row = row.split(' -> ');

        let town = row[0];
        let product = row[1];
        let sales = row[2].split(' : ').reduce((a, b) => a * b);

        if (!summary.has(town)){
            summary.set(town, new Map());
        }

        if (!summary.get(town).has(product)){
            summary.get(town).set(product, 0);
        }

        summary.get(town).set(product, summary.get(town).get(product) + sales);
    }

    for (let [town, products] of summary){
        console.log(`Town - ${town}`);

        for (let [product, sales] of products){
            console.log(`$$$${product} : ${sales}`);
        }
    }
}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3',

]);