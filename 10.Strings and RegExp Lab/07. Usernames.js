function main(emails) {
    let names = [];
    let hosts = [];

    //Before @at extractor
    for (let mail = 0; mail < emails.length; mail++)
    {
        let currentMail = emails[mail];
        let splitName = currentMail.split('@');
        names.push(splitName[0] + ".");
        hosts.push(splitName[1]);
    }

    //Hosts first letter extractor
    for (let host = 0; host < hosts.length; host++) {
        let currentHost = hosts[host];
        let splitHost = currentHost.split('.');

        //Host first letter adder to name
        for (let i = 0; i < splitHost.length; i++) {
            let fistLetter = splitHost[i][0];
            names[host] = names[host] + fistLetter;
        }
    }
    console.log(names.join(', '));
}
main(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);

function extractUsernames(inputEmails) {
    let result = [];
    for (let email of inputEmails){
        let [alias, domain] = email.split('@'); //splits pesho@abv.bg to 'pesho' and 'abv.bg'
        let username = alias + '.'; //add "." to end if username
        let domainParts = domain.split('.'); //splits abv.bg to 'abv' and 'bg'
        domainParts.forEach(domainpart => username += domainpart[0]); //Adds 1st letter of eacg domainpart to username
        result.push(username);
    }
    console.log(result.join(', '));
}