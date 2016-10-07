function main(input) {
    let rotations = Number(input[input.length-1]);
    input.pop();

    for (let i = 1; i <= rotations % input.length; i++)
    {
        input.unshift(input[input.length-1]);
        input.pop();
    }
    console.log(input.join(' '));
}
// main(['1', '2', '3', '4', '2']);
main(['Banana', 'Orange', 'Coconut', 'Apple', '15']);