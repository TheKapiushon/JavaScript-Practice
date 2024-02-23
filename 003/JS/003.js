// Sum of Multiples

function sumOfMultiples(first, startingRange, second) {
    let sum = 0;
    for (let i = startingRange; i <= second; i++) {
        if (i % first === 0) {
            sum = i + sum
        }
    }
    if (second < 0) {
        sum = "Invalid"
    }

    return sum; 
}

const first = Number(prompt("Enter your first number: "));
const second = Number(prompt("Enter your second number: "));
const startingRange = 1;
const result = sumOfMultiples(first, startingRange, second);
alert(result);

