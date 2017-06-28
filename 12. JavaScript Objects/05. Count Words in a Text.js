function countWords(input) {
    input = input[0];
    input = input.split(/\W/);
    input = input.filter(x => x!=='');

    let obj = {};
    for (let i = 0; i < input.length; i++){
        let word = input[i];

        if(obj.hasOwnProperty(word)){
            obj[word]++;
        } else {
            obj[word] = 1;
        }
    }
    console.log(JSON.stringify(obj));
}

countWords(['aaa bbb aaa']);