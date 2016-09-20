function oddEven(num) {

    let remainer = num % 2;
    if (remainer == 0)
    {
        console.log("even")
    }
    else if (remainer == Math.round(remainer))
    {
        console.log("odd");
    }
    else
    {
        console.log("invalid")
    }
}