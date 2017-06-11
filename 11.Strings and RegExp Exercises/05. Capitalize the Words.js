function program(input) {
    input = input.split(' ');

    for (let word in input){
        input[word] = input[word].toLowerCase();
        input[word] = input[word].charAt(0).toUpperCase() + input[word].slice(1);
    }
    console.log(input.join(' '));
}

program('Was that Easy? tRY thIs onE for SiZe!');