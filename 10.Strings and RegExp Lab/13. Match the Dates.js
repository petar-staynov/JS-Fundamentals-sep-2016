function matchDate(input) {
    let text = input.join(' ');

    let regex = new RegExp(/\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/, 'g');

    let match;

    while (match = regex.exec(text)) {
        console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
    }
}
main(['1-Jun-2012 is before 14-Feb-2016']);