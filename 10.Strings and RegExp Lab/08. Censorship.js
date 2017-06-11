function censorship(text, censorArr) {
    //censorArr in censorhip censorArr
    for (let i = 0; i < censorArr.length; i++) {
        while (text.indexOf(censorArr[i]) > -1) {
            text = text.replace(censorArr[i], '-'.repeat(censorArr[i].length));
        }
    }
    console.log(text);
}

main(['roses are red, violets are blue', ', violets are', 'red']);