function convert(grads) {
    grads = Number(grads);
    grads = grads % 400;
    grads += 400;
    grads = grads % 400;

    let degrees = grads * 0.9;

    console.log(degrees);
}
convert(['1000000'])