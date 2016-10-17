function main(input) {
    let arr = input.map(Number);
    let results = [];
    console.log(arr);


    for (let currentNum = 0; currentNum < arr.length-1; currentNum++){
        console.log(`current num = ${arr[currentNum]}`);
        if (arr[currentNum] == 0) {
            results.push(0);
            console.log(`pushed = ${arr[currentNum]}`);
        }
        else if (arr[currentNum] <= 9 && arr[currentNum] > 0 && currentNum != arr.length)
        {
            console.log(`it's S`);
            let startIndex = currentNum;
            console.log(`startindex = ${startIndex}`);

            let currentSum = 1;
            let endindex = startIndex+arr[startIndex];
            console.log(`endindex = ${endindex} arrLengh = ${arr.length}`);

            if (endindex >= arr.length) {
                endindex = arr.length - 1;
            }


            for (let i = startIndex + 1; i <= endindex; i++){
                console.log("current num2 " + arr[i]);
                currentSum = currentSum * arr[i];
                console.log(`currentSum = ${currentSum}`);
            }
            console.log(`pushed = ${currentSum}`);

            results.push(currentSum);
        }
    }
    // console.log(results);
    // var largest = arr.reduce(function(x,y){
    //     return (x > y) ? x : y;
    // });
    //
    // console.log(largest);
    console.log(results);
    console.log(Math.max.apply(Math, results ));
    // console.log(`results = ${results.join(' ')}`);
}


// main([
//     '0',
//     '1',
//     '2',
//     '0',
//     '1',
//     '44',
// ]);

// main([
//     '10',
//     '20',
//     '2',
//     '30',
//     '44',
//     '123',
//     '3',
//     '56',
//     '20',
//     '24',
// ]);

// main([
//     '100',
//     '200',
//     '2',
//     '3',
//     '2',
//     '3',
//     '2',
//     '1',
//     '1',
// ])

main([
    '9',
    '1',
    '2',
    '3',
    '3',
    '1',
    '1',
    '1',
    '1',
]);