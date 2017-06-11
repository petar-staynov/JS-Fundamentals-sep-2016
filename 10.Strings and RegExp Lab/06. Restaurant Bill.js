function restaurantBill(input) {
    let products = [];
    let sum = 0;

    for (let i = 0; i < input.length; i += 2) {
        products.push(input[i]);
        sum += Number(input[i + 1]);
    }
    console.log(`You purchased ${products.join(', ')} for a total sum of ${sum}`);
}