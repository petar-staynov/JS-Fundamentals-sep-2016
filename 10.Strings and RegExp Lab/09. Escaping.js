function main(input) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
    console.log('<ul>')
    for (let element in input){
        // input[element] = input[element].htmlEscape();
        console.log('<li>' + input[element].htmlEscape() + '</li>')
    }
    console.log('</ul>');

}

main(['<b>unescaped text</b>', 'normal text']);