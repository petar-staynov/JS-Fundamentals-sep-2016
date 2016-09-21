function money([P, i, period, t]) {
    P = Number(P);
    i = Number(i) / 100;
    period = 12 / Number(period);
    t = Number(t);
    let f = P * Math.pow(1 + (i/period), period * t);
    console.log(f.toFixed(2));
}
money(['1500', '4.3', '3', '6']);