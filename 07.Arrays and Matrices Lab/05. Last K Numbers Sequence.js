function sumLastKnums(input) {
    let n = Number(input[0]);
    let k = Number(input[1]);

    let seq = [];
    seq[0] = 1;

    var lastKcombine = 0;

    for (let current = 1; current < n; current++)
    {
        let start = Math.max(0, current - k);
        let end = current-1;
        let sum = 0;
        for (let loop = start; loop <= end; loop++)
        {
            sum += seq[loop];
        }
        seq[current] = sum;
    }
    console.log(seq.join(' '))
}
sumLastKnums(['9', '5']);
