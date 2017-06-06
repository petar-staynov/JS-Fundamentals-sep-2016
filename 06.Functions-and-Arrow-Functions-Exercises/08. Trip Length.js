function tripLength(input) {
    let x1 = input[0];
    let y1 = input[1];

    let x2 = input[2];
    let y2 = input[3];

    let x3 = input[4];
    let y3 = input[5];

    let p1_p2 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let p2_p3 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
    let p1_p3 = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));

    let p1_2_3 = p1_p2 + p2_p3;
    let p1_3_2 = p1_p3 + p2_p3;
    let p2_1_3 = p1_p2 + p1_p3;

    //Check starting point
    if (p1_2_3 <= p1_3_2 && p1_2_3 <= p2_1_3){
        console.log("1->2->3: " + p1_2_3);
    }
    else if (p1_3_2 < p1_2_3 && p1_3_2 < p2_1_3){
        console.log("1->3->2: " + p1_3_2);
    }
    else if (p2_1_3 < p1_2_3 && p2_1_3 < p1_3_2){
        console.log("2->1->3: "+ p2_1_3);
    }
};

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);