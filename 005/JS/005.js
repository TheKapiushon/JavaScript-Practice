// Reverse String

function String(str) {
    let myString = "";
    for (let i = str.length - 1 ; i >= 0; i--) {
        myString += str[i]
        
    }
    return myString
}

const Input = prompt("Enter your value: ")
const Final = String(Input)
alert(Final);
