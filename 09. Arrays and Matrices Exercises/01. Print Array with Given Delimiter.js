function main(input) {
    let delimiter = input[input.length-1];
    input.pop(); //removes last element from array
    let result = "";

    for(let i = 0; i < input.length; i++)
    {
        if (i == 0)
        {
            result += input[i];
        }
        else
        {
            result += delimiter + input[i];
        }
    }
    console.log(result);
}