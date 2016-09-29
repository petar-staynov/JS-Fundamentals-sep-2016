function firstAndLastKnums(input) {
    let k = Number(input[0]);
    // console.log("k = " + k);

    let arr = input.map(Number).slice(1); //removes k from array
    // console.log("array = " + arr.join(' '));

    var result1 = [];
    var result2 = [];

    //Prints first k elements from array
    for (let firstK = 0; firstK < k; firstK++)
    {
        result1.push(arr[firstK]);
    }

    var k2 = arr.length - k;
    // console.log("k2 = " + k2);

    //Prints last k elements from array
    for (let lastK = k2; lastK <= arr.length - 1; lastK++)
    {
        result2.push(arr[lastK]);
    }


    console.log(result1.join(' '));
    console.log(result2.join(' '));
}
firstAndLastKnums(['2', '7', '8', '9']);