let ranCharMaker1 = Math.floor(Math.random() * 26) + 97
let ranCharMaker2 = Math.floor(Math.random() * 26) + 97
let ranCharMaker3 = Math.floor(Math.random() * 26) + 97
let ranNumMaker = Math.floor(Math.random() * 11);
let text1 = String.fromCharCode(ranCharMaker1);
let text2 = String.fromCharCode(ranCharMaker2);
let text3 = String.fromCharCode(ranCharMaker3);

const textContainer = text1 + text2 + text3

let Final = ''
for (let i = 0; i < 3; i++) {
    
    let ranNumMaker = Math.floor(Math.random() * 10);
    Final += ranNumMaker
}
Final += textContainer

alert(Final);
