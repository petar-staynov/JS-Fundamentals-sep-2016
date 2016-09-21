function units(num) {
    num = Number(num);

    let feet = Math.floor(num / 12);
    // console.log(feet);
    let inches = num - feet * 12;
    console.log(feet + "'" + "-" + inches + "\"");
}
units(['11']);