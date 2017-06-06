function program(input) {
    let result = [];
    let num = 0;
    input.forEach(command => {
        if (command == 'add') {
            result.push(++num)
        }
        else if (command == 'remove') {
            result.pop();
            num++;
        }
    });
    if (result.length === 0){
        console.log('Empty');
        return;
    }
    console.log(result.join('\n'));
}