function func(input) {
    let num = input[0];

    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case "chop":
                console.log(num /= 2);
                continue;
            case "dice":
                console.log(num = Math.sqrt(num));
                continue;
            case "spice":
                console.log(num += 1);
                continue;
            case "bake":
                console.log(num *= 3);
                continue;
            case "fillet":
                console.log(num -= 0.20 * num);
                continue;
        }
    }
}