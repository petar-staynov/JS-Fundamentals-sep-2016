function addRemoveArray(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] == "add"){
            arr.push(i + 1)
            //arr[i] = i + 1;
        }
        else if (input[i] == "remove"){
            arr.pop()
            //delete arr[i - 1];
        }
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != "" && arr[i] != undefined){
            console.log(arr[i]);
            result++;
        }
    }
    if (result == 0)
        console.log("Empty")
}