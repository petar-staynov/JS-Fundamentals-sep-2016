function evenPosition(arr) {
    let result = [];

    for (let num in arr)
    {
        if (num % 2 == 0)
        {
            result.push(arr[num]);
        }
    }
    console.log(result.join(' '));
}