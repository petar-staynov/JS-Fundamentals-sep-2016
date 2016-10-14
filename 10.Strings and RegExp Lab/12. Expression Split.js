function main(input) {
    let text = input[0];
    let regex = /[\s.();,]+/;
    let result = text.split(regex);
    console.log(result.join('\n'));
}
main(['let sum = 4 * 4,b = "wow";']);