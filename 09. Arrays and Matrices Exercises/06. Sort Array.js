function main(input) {
    function sorting(astr, bstr) {
        if (astr.length != bstr.length) {
            return astr.length - bstr.length;
        }
        return (astr < bstr) ? -1 : (astr > bstr) ? 1 : 0;
    }
    input.sort(sorting);
    console.log(input.join('\n'));
}

main(['Deny', 'omen', 'test', 'Default']);
// main(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);