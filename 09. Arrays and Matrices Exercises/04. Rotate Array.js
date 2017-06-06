function program(input) {
    let rotations = input.pop() % input.length;

    for (let i = 0; i < rotations; i++) {
        let ele = input.pop();
        input.unshift(ele);
    }
    console.log(input.join(' '));
}