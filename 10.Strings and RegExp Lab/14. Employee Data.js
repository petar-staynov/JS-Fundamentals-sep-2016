function employeeData(input) {
    let result = [];
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/;

    for (let employee of input) {
        let match = regex.exec(employee);
        if (match){
            result.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
        }
    }
    console.log(result.join('\n'));
}
main(['Isacc - 1000 - CEO']);