function matchMultiplication(input) {
    let regex = /\-*[0-9]+\s*\*\s*[0-9\-]+[0-9\.]*/;

    let match;
    while (match = regex.exec(input)) {
        let nums = match[0].replace(/ /g, '');
        nums = nums.split('*');
        let num1 = nums[0];
        let num2 = nums[1];
        let total = num1 * num2;
        input = input.replace(regex, total);
    }
    console.log(input);
}