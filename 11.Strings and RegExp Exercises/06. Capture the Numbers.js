function program(input) {
    let pattern = /\d+/g;

    let result = [];

    let match;
    while (match = pattern.exec(input)){
        result.push(match[0]);
    }
    console.log(result.join(' '));
}

program(`The300
What is that?
I think it’s the 3rd movie.
Lets watch it at 22:45
`); //this should be an array