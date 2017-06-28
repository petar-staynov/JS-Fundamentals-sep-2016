function jsonToHtml(input) {
    input = JSON.parse(input);
    let headings = Object.keys(input[0]);

    console.log(`<table>`);

    //Heading Printer
    let headingHtml = `   <tr>`;
    for (let i = 0; i < headings.length; i++){
        headingHtml += `<th>${headings[i]}</th>`
    }
    headingHtml += `</tr>`;
    console.log(headingHtml);


    //Body printer
    let bodyHtmlArr = [];
    for (let obj = 0; obj < input.length; obj++){
        let bodyHtml = ``;
        bodyHtml += `   <tr>`;
        for (let prop = 0; prop < headings.length; prop++){
            let element = input[obj][`${headings[prop]}`];
            element = htmlEscape(element);

            // console.log('ASD'+typeof element);
            bodyHtml += `<td>${element}</td>`;
        }
        bodyHtml += `</tr>`;
        bodyHtmlArr.push(bodyHtml);
    }
    console.log(bodyHtmlArr.join('\n'));
    console.log(`</table>`);

    function htmlEscape(string) {
        if (typeof string != 'string'){
            return string;
        }
        return string.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
}
jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
// jsonToHtml('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}, {"Name":"Gosho","Age":18,"City":"Plovdiv"}, {"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');