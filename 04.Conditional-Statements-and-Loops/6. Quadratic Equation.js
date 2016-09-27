function equation(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let D = Math.pow(b, 2) - (4 * a * c);
    // console.log(D);

    if (D > 0)
    {
        let x1 = ((b * -1) + Math.sqrt(D)) / (2 * a);
        let x2 = ((b * -1) - Math.sqrt(D)) / (2 * a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    }

    else if (D == 0)
    {
        let x1 = ((b * -1)) / (2 * a);
        console.log(x1);
    }
    else if (D < -0)
    {
        console.log("No")
    }

}
equation(['5', '2', '1']);
