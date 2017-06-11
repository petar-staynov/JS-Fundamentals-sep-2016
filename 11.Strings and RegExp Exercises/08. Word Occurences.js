function program(string, word) {
    // let regex = "/\bWORD \b/";
    // regex = regex.replace(/WORD/g, word);

    let regexString = `\\b${word}\\b`;
    let regex = new RegExp(regexString, 'gi');
    let counter = 0;

    let match;
    while (match = regex.exec(string)) {
        counter++;
    }
    console.log(counter);
}
program('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');