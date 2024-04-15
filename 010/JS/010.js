// Variables

const num = document.querySelector('h2');
const valueNum = Number(num.textContent);

// Functions

function addNum() {

    const value = Number(num.textContent) + 1;
    num.textContent = value;
}

function minNum() {

    const value = Number(num.textContent) - 1
    num.textContent = value
}

function oddNum() {

    const valueNum = Number(num.textContent);
    const value = Number(num.textContent) + 1;

    if (valueNum % 2 != 0) {
        num.textContent = value;
    }
}


// function color() {
    
//     let color = "";
//     let Walet = num.classList.toggle(color);

//     for (let i = 0; i > 0; i++) {

//         if (valueNum < 5) {
//             color = "green"

//         } else if (valueNum > 5 && valueNum < 8) {
//             color = "yellow"

//         } else if (valueNum > 8) {
//             color = "red"
//         }
//     }

//     return Walet
// }

// color(valueNum);
