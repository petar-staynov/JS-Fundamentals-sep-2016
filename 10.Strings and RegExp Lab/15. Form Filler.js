function main(input) {
    let [name, email, number] = [input.shift(), input.shift(), input.shift()];

    input.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, name);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, number);
        console.log(line);
    });
}