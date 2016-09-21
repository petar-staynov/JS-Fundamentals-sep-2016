function problem([a, b]) {
    var a = Number(a);
    var b = Number(b);

    let perimeter = a + a + b + b;
    let area = a * b;

    console.log(area);
    console.log(perimeter);
}
problem(['2', '2']);