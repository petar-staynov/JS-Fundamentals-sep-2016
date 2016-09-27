function draw(input) {
    let n = Number(input[0]);
    let sign = '$';
    for (i = 1; i <= n; i++)
    {
        console.log(sign);
        sign = sign + '$';
    }
}
draw('5')