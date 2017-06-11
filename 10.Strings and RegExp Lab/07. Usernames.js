function usernames(input) {
    let result = [];
    for (let email = 0; email < input.length; email++) {
        let emailArr = input[email].split('@');
        let hostArr = emailArr[1].split('.');
        let hostJoin = '';
        hostArr.forEach(word => {
            hostJoin += word[0];
        });
        let username = emailArr[0] + '.' + hostJoin;
        result.push(username);
    }
    console.log(result.join(', '));
}