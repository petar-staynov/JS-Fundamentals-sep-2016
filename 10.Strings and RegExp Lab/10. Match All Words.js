function main([input]) {
    let words = input.split(/\W/);
    words = words.filter(Boolean); //removes empty strings
    console.log(words.join('|'));
}
main(['_(Underscores) are also word characters']);