////Printing
//Escaping
console.log(`object = ${objectValue}`);

/////Arrays
arr.join('element'); //element = some sign to use for joining
arr.splice(x, y); //x - start index; y - end index (excluded)
arr.split('|'); arr.split(/regular expression/); //splits by sign or by regex
arr.pop(); let popped = arr.pop(); //removes last element and returns it
arr.shift(); let shifter = arr.shift();//removes 0 element and returns it
arr.unshift();//pushes new element to beginning of array and moves rest
arr.push(<element>); //pushes element to end of array

////regex
let regex= /<insert regex here>/g;


////MATRICES
//Matrix numbers mapper
let matrix = input.map(row => row.split(' ').map(Number));

//Matrix walker
for (let row = 0; row < matrix.length; row++) {
    let cols = matrix[row];
    for (let col = 0; col < cols.length; col++) {
        console.log(matrix[row][col]);
    }
}

////Strings
//Read, Splice, Trim spaces, Remove empty elements
let elements = obj.splice('|').map(each => each.trim()).filter(each => each != '');

////Regular Expression
element.split(/regex/); //splits by regex
let text="long text here"; let matched = text.match(/regex/); //matches text by pattern and returns all matches
let text ="long text here"; let pattern = new RegExp(/expresion/); pattern.match(text);//matches text by patter and returns first match
text.replace("string" or /pattern/ to replace, thing to be replaced with);
text.indexOf("string" or /pattern/);//return array index of matched string or pattern

