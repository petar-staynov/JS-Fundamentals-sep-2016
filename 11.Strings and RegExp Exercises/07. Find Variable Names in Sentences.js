function program(input) {
    let matches = [];

    let regex = /\b_[a-zA-Z0-9]+\b/g;

    let match;
    while(match = regex.exec(input)){
        matches.push(match[0].replace('_', ''));
    }
    console.log(matches.join(','));
}
program('__invalidVariable _evenMoreInvalidVariable_ _validVariable');