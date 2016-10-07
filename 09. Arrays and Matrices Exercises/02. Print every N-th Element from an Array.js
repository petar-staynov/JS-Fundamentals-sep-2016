function main(input) {
    let step = Number(input[input.length-1]);
    input.pop();

    for (let i = 0; i < input.length; i+=step)
    {
        if (i>input.length)
        {
            break;
        }
        else console.log(input[i]);
    }
}

main(['1', '2', '3', '4', '2',]);