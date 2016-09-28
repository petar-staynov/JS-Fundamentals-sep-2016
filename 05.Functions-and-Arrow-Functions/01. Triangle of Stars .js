function triangle(n) {
    let num = Number(n);
    var oneLess = 1;
    for (let row = 1; row <= (num * 2) - 1; row++){
        if (row > num)
        {
            oneLess++;
            console.log('*'.repeat(row - oneLess));
            //console.log("row=" + row + " oneLess=" + oneLess + "final" + (row-oneLess));
            oneLess++;
        }
        else console.log('*'.repeat(row));
    }
}
triangle('2');