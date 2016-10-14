function main([text]) {
    let result = [];
    let startIndex = text.indexOf('(');

    while (startIndex > -1) {
        let endIndex = text.indexOf(')', startIndex); //value, starting index
        if (endIndex == -1)
            break;
        let snippet = text.substring(startIndex + 1, endIndex);
        result.push(snippet);
        startIndex = text.indexOf('(', endIndex);
    }
    console.log(result.join(', '));
}

main(['Rakiya (Bulgarian brandy) is home-made liquor (alcoholic drink). It can be made of grapes, plums or other fruits (even apples).']);