function template(input) {
    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];

        console.log(question);
        console.log(answer);

        var html = '<?xml version="1.0" encoding="UTF-8"?> ' +
            '\n <quiz> ' +
            '\n <question> \n'
            + question +
            '\n </question>\n  <answer>\n '
            + answer +
            '\n </answer> \n </quiz>';

        console.log(html);
    }
}

template(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);


