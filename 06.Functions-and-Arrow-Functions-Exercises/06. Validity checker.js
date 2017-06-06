function func(input) {
    let point1 = {x: input[0], y: input[1]};
    let point2 = {x: input[2], y: input[3]};

    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }


    if (Number.isInteger(distance(point1.x, point1.y, 0, 0))) {
        console.log(`{${point1.x}, ${point1.y}} to {0, 0} is valid`);
    } else {
        console.log(`{${point1.x}, ${point1.y}} to {0, 0} is invalid`);

    }
    if (Number.isInteger(distance(point2.x, point2.y, 0, 0))) {
        console.log(`{${point2.x}, ${point2.y}} to {0, 0} is valid`);
    } else {
        console.log(`{${point2.x}, ${point2.y}} to {0, 0} is invalid`);

    }
    if (Number.isInteger(distance(point1.x, point1.y, point2.x, point2.y))) {
        console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is valid`);
    } else {
        console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is invalid`);
    }
}