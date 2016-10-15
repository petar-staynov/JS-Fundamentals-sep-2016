////Printing
//Escaping
console.log(`object = ${objectValue}`);

/////Arrays
arr.join('element'); //element = some sign to use for joining
arr.splice(x, y); //x - start index; y - end index (excluded)
arr.split('|'); arr.split(/regular expression/); //splits by sign or by regex
let regex
console.log('');

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

