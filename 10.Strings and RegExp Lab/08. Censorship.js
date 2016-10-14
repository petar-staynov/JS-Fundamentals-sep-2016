function main(input) {
    let text = input[0];
    let words = input.slice(1); //remove 1st element //these are words to be censored

    for (let word of words){
        let replace = '-'.repeat(word.length);
        let regex = new RegExp(word, 'g');
        text = text.replace(regex, replace); //scans text for 'this' word to censor with replaced,=
    }
    console.log(text);
}

main(['roses are red, violets are blue', ', violets are', 'red']);