function emailMatch(input) {
    let regex = new RegExp(/^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/,'g');
    console.log(regex.test(input) ? 'Valid' : 'Invalid');
}
main(['invalid@emai1.bg']);