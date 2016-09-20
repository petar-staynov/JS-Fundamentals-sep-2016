function circleArea(r) {
    let area = Math.PI * r * r;
    console.log(area);

    let areaRounded = area.toFixed(2);
    // let areaRounded = Math.round(area * 100) /100;
    console.log(areaRounded);
}