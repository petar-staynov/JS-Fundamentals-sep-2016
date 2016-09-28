function table(input) {
    let n = Number(input);
    var table = "<table border=\"1\">";

    for (let row = 0; row <= n; row++)
    {
        table += "<tr>";
        for (let col = 0; col <= n; col++)
        {
            if (row == 0 && col == 0){ //writes x in corner
                table += "<th>x</th>";
            }
            else if (row == 0){ //writes col number on top
                table += "<th>" + col + "</th>";
            }
            else if (row > 0 && col == 0) //writes row number on left
            {
                table += "<th>" + row + "</th>";
            }
            else {//writes row * col in rest
                table += "<td>" + (row * col) + "</td>";
            }
        }
        table += "</tr>";
    }
    table += "</table>";

    console.log(table);
}
table('5');
        