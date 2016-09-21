function distance([speed1, speed2, time]) {
    let time2 = time / 3.6;
    let distance1 = speed1 * time2;
    let distance2 = speed2 * time2;
    let delta = Math.abs(distance2 - distance1);
    console.log(delta)
}
distance(['5', '-5', '40'])