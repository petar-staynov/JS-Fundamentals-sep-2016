function func(input) {
    var targerThickness = input[0];


    for (let i = 1; i < input.length; i++) {
        let currentThickness = input[i];
        console.log(`Processing chunk ${currentThickness} microns`);


        while (currentThickness !== targerThickness) {

            //CUT
            let cutRuns = 0;
            while (currentThickness / 4 >= targerThickness) {
                currentThickness /= 4;
                cutRuns++;
            }
            if (cutRuns > 0) {
                console.log(`Cut x${cutRuns}`);
                currentThickness = wash(currentThickness);
            }


            //LAP
            let lapRuns = 0;
            while (currentThickness - 0.20 * currentThickness >= targerThickness) {
                currentThickness -= 0.2 * currentThickness;
                lapRuns++;
            }
            if (lapRuns > 0) {
                console.log(`Lap x${lapRuns}`);
                currentThickness = wash(currentThickness);
            }

            //Grind
            let grindRuns = 0;
            while (currentThickness - 20 >= targerThickness) {
                currentThickness -= 20;
                grindRuns++;
            }
            if (grindRuns > 0) {
                console.log(`Grind x${grindRuns}`);
                currentThickness = wash(currentThickness);
            }

            //Etch
            let etchRuns = 0;
            while (currentThickness - 2 >= targerThickness || currentThickness - 2 === targerThickness - 1) {
                currentThickness -= 2;
                etchRuns++;
            }
            if (etchRuns > 0) {
                console.log(`Etch x${etchRuns}`);
                currentThickness = wash(currentThickness);
            }

            //Xray
            if (currentThickness < targerThickness) {
                currentThickness++;
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${currentThickness} microns`);
    }
    function wash(crystal) {
        console.log("Transporting and washing");
        // console.log(crystal);
        return Math.floor(crystal);
    }
}