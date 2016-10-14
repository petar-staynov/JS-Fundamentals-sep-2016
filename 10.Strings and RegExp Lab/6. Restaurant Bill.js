function main(input) {
    // console.log(input);

    let products = [];
    let sum = 0;

    //PRODUCTS LOOP
    for (let product = 0; product < input.length; product +=2){
        // console.log(input[product]);
        products.push(input[product]);
    }
    for (let price = 1; price < input.length; price += 2){
        // console.log(input[price]);
        sum += Number(input[price]);
    }

    // console.log(products.join(', '));
    // console.log(sum);

    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`)

}
main(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);

function printBill(input) {
    let items = input.filter((obj, index) => index % 2 == 0); //
    let sum = input.filter((obj, index) => index % 2 == 1).map(Number).reduce((a,b) => a + b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}
printBill(['Cola','1.35', 'Pancakes', '2.88']);