function aggregateelements(input) {
    let elements = input.map(String);
    textor(elements, 0, (x) => x.toUpperCase());

    function textor(text) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++)
        {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}