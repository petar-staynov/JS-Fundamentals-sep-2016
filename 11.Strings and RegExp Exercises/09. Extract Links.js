function program(inputArr) {
    // inputArr = inputArr.split('\n');

    let regex = /w{3}\.[a-zA-Z0-9-]+([.][a-z]+)+/g;

    let match;
    while (match = regex.exec(inputArr)){
        let validResult = match[0];
        console.log(validResult);
    }
}

program(`Join WebStars now for free, at www.web-stars.com
You can also support our partners:
Internet - www.internet.com
WebSpiders - www.webspiders101.com
Sentinel - www.sentinel.-ko 
`);