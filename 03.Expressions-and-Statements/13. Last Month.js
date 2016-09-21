function lastMonth([day, month, year]) {
    day = 0;
    let currentDate = new Date(year, month - 1, +1);
    var day = currentDate.getUTCDate();
    console.log(day);
}
lastMonth(['13','12','2004']);