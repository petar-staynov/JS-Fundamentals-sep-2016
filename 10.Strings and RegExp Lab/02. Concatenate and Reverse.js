function main(arr) {
    let string = arr.join('');
    let chars = Array.from(string);
    chars.reverse();
    let result = chars.join('');
    console.log(result);
}