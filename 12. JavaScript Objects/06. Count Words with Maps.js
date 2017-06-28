function countWordsMap(input) {
    let map = new Map();

    for (let row = 0; row < input.length; row++){
        let words = input[row].split(/\W/).filter(x => x != '');

        for (let word = 0; word < words.length; word++){
            let wordElement = words[word].toLowerCase();

            if (!map.has(wordElement)){
                map.set(wordElement, 0);
            }
            map.set(wordElement, map.get(wordElement)+1);
        }


    }

    let mapSort = Array.from(map.keys()).sort();

    mapSort.forEach(w => {
        console.log(`'${w}' -> ${map.get(w)} times`);
    })
}

countWordsMap([ 'JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --' ]);