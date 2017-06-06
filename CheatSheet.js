////Printing
//Escaping
console.log(`object = ${objectValue}`);

/////Arrays
arr.join('element'); //element = some sign to use for joining
arr.split('|'); arr.split(/regular expression/); //splits by sign or by regex

arr.pop(); let popped = arr.pop(); //removes last element and returns it
arr.shift(); let shifter = arr.shift();//removes first element and returns it
arr.unshift();//pushes new element to beginning of array
arr.push(<element>); //pushes new element to end of array

arr.slice(startIndex, endIndex+1); //returns elements between indexes
arr.splice(starIndex, numOfElements); //deletes numOfelements from startIndex onwards

////regex
let regex= /<insert regex here>/g;


////MATRICES
//Matrix numbers mapper
let matrix = input.map(row => row.split(' ').map(Number));

//Matrix printer
console.log(
  matrix.map(row => row.join(' '))
  .join('\n'));


//Matrix walker
    for (let row = 0; row < input.length; row++){
        for (let col = 0; col < input[row].length; col++){
            
        }
    }

    //Create matrix
    let matrix = [];
    for (let row = 0; row < height; row++) {
        let rowArr = []; //row array
        for (let col = 0; col < width; col++) {
            rowArr.push(0)
        }
        matrix.push(rowArr);
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