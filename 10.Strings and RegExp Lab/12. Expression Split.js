function expressionSplit(input) {
    let regex = new RegExp(/\s+|,|\.+|\(+|\)+|;+/, 'g');
    input = input.split(regex);

    input = input.filter(e=>{
        return e !== '';
    });

    console.log(input.join('\n'));
}

expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');