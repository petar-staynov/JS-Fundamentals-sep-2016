function square(n) {
    let num = Number(n);

    for (let row = 1; row <= num; row++)
    {
        console.log('* '.repeat(num));
    }
}
square('2')