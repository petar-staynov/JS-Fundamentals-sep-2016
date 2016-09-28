function square(n) {
    var n = Number(n);

    var lines = 0;
    if (n % 2 == 0)
    {
        lines = n - 1;
    }
    else lines = n;

    for (let row = 1; row <= lines; row++)
    {
        if (row == 1 || row == n || row == Math.ceil(n / 2) || (row == n - 1 && n % 2 == 0))
        {
            for (let col = 1; col <= 2 * n - 1; col++)
            {
                if (col == 1 || col == n || col == n* 2 - 1) {process.stdout.write("+");}
                else (process.stdout.write("-"))
            }
            console.log();
        }
        else
        {
            for (let col = 1; col <= 2 * n - 1; col++)
            {
                if (col == 1 || col == n || col == n* 2 - 1) {process.stdout.write("|");}
                else (process.stdout.write(" "))
            }
            console.log();
        }
    }
}
square('200');

