function sumByTown(input) {
    let obj = {};
    for (let i = 0; i < input.length; i+=2){
        let town = input[i];
        let value = Number(input[i+1]);

        if (obj.hasOwnProperty(town)){
            obj[town] += value;
        } else {
            obj[town] = value
        }
    }
    console.log(JSON.stringify(obj));
}
sumByTown([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4',
]);