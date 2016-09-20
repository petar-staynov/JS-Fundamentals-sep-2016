function cone([r, h]) {
    let slangHeight = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    let volume = 1/3 * Math.PI * Math.pow(r, 2) * h;
    let lateralArea = Math.PI * r * slangHeight;
    let baseArea = Math.PI * Math.pow(r, 2);
    let totalArea = lateralArea + baseArea;

    console.log("volume = " + volume.toFixed(4));
    console.log("area = " + totalArea.toFixed(4));
}