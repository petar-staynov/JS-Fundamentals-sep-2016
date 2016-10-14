function main([email]) {
    let pattern = /\b[A-Za-z\d]+@[a-z]+\.[a-z]+\b/;

    let result = pattern.test(email);
    if (result) console.log("Valid");
    else console.log("Invalid");
}
main(['invalid@emai1.bg']);