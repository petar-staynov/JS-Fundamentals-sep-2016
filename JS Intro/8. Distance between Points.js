function distanceBetweenPoints([x1, y1, x2 ,y2]) {
    let pA = {x:x1, y:y1};
    let pB = {x:x2, y:y2};

    let distanceX = Math.pow(pA.x - pB.x, 2);
    let distanceY = Math.pow(pA.y - pB.y, 2);
    console.log(Math.sqrt(distanceX + distanceY));
}