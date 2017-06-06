function func(input) {
    let numStr = input.toString();
    let sum = sumFunc(numStr);

    while (sum/numStr.length <= 5){
        numStr += '9';
        sum = sumFunc(numStr);
    }

    console.log(numStr);
    function sumFunc(string) {
        let numArr = string.split('');
        let sum = 0;
        for (let i = 0; i < numArr.length; i++){
            sum += Number(numArr[i]);
        }
        return sum;
    }
}