function negPos(arr) {
    arr = arr.map(Number);
    let result = [];
    let negative = [];

    for (num of arr)
    {
        if (num < 0)
        {
            result.unshift(num);
        }
        else
        {
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}

negPos(['-1', '0', '-5', '9']);