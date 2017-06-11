function matchWords(input) {
    let result = [];
    let regex = new RegExp(/\w+/, 'g');

    result.push(input.match(regex));

    console.log(result[0].join('|'));
}
main(['_(Underscores) are also word characters']);