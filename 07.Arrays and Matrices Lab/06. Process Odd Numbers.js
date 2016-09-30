function process(arr) {
    let result = arr.filter((num, i) => i % 2 != 0).map(x => x*2).reverse();
    //Takes odd numbers, doubles them and reverses the array
    console.log(result.join(' '))
}