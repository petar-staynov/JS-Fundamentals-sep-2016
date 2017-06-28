function scoreToHtml(input) {
    input = JSON.parse(input);

    console.log('<table>');
    if(input.length > 0){
        console.log('  <tr><th>name</th><th>score</th></tr>');
    }
    for (let i = 0; i < input.length; i++){
        let obj = input[i];
        let name = obj.name;
        name = htmlEscape(name);
        console.log(`   <tr><td>${name}</td><td>${obj.score}</td></tr>`);
    }
    console.log('</table>');

    function htmlEscape(string) {
        return string.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
}
// scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');