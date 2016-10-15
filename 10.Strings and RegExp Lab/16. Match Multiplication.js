function main([input]) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;
    let text = input.replace(regex, (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}