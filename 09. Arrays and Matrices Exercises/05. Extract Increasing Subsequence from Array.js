function main(input) {
    let result = [];
    result[0] = input[0];
    let counter = 0;
    for (let i = 1; i <= input.length; i++)
    {
        // console.log("i = " + i + " input[i] = " + input[i]);
        // console.log("count = " + counter + " result[count] = " + result[counter]);
        if (Number(input[i]) >= Number(result[counter]))
        {
            // console.log("inside if");
            // console.log(input[i] + result[counter]);
            result.push(input[i]);
            counter++;
        }
        // console.log();
    }
    console.log(result.join('\n'));
}
main(['1', '3', '8', '4', '10', '12', '3', '2', '24']);
