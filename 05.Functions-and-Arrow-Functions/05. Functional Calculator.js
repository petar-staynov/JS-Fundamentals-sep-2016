function calc(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    // console.log(num1);
    // console.log(num2);
    // console.log(operator);

    if (operator == '+')
    {
        console.log(num1 + num2);
    }
    else if (operator == '-')
    {
        console.log(num1 - num2);
    }
    else if (operator == '*')
    {
        console.log(num1 * num2);
    }
    else if (operator == '/')
    {
        console.log(num1 / num2);
    }
}
calc(['3', '4', '/']);