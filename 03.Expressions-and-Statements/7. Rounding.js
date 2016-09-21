function round([num, precision]) {

    num = Number(num);
    precision = Number(precision);
    if (precision > 15)
    {
        precision = 15;
    }
    let result = num.toFixed(precision);
    console.log(result.replace(/^0+|0+$/g, ""));
}

round(['10.5', '3']);