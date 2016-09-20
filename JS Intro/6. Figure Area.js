function figureArea([w1, h1, w2, h2]){
    let [area1, area2, area3] = [w1 * h1, w2 * h2, Math.min(w1, w2) * Math.min(h1, h2)];
    console.log(area1 + area2 - area3);
}