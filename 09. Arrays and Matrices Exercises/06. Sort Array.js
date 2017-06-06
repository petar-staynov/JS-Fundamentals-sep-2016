function program(input) {
    input.sort(function (a, b) {
        if (a.length !== b.length) {
            return a.length > b.length;
        }
        return a[0] > b[0];
    });
    console.log(input.join('\n'));
}

program(['Isaac', 'Theodor', 'Jack', 'Harrison', 'George']);
program(['test', 'Deny', 'omen', 'Default']);