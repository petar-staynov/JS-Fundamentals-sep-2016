function uppercase([str]) {
    let result = str.toUpperCase().split(/\W+/).filter(w => w!='').join(', ');
    console.log(result);
}