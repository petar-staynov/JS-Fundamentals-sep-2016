function program(input) {
    let rotations = input.pop();

    for (let i = 0; i < rotations; i++){
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}