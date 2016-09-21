function lastMonth([day, month, year]) {
    let currentDate = new Date(year, month - 1, +1);
    var day = currentDate.getUTCDate();
    console.log(day);
}
lastMonth(['13','12','2004']);