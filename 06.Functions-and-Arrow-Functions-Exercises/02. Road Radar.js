function radar(input) {
    let speed = Number(input[0]);
    let area = String(input[1]);

    function getLimit(area) {
        switch (area) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
    let limit = getLimit(area);

    let overSpeed = speed - limit;
    if (overSpeed <= 0) console.log()
    else if (overSpeed > 0 && overSpeed <= 20) console.log("speeding");
    else if (overSpeed > 20 && overSpeed <= 40) console.log("excessive speeding");
    else if (overSpeed > 40) console.log("reckless driving");
}
radar(['21', 'residential']);