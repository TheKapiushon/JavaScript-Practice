// Separate Price

function Price(Num) {

    alert(Intl.NumberFormat('en-US').format(price));

}

const price = prompt("Enter your price: ");

const result = Price(price);

// Convertor Str to Num

function Convertor(Str) {
    const result = Number(Str)
    return result
}

const Input = prompt("Enter your number: ");

const Final = Convertor(Input);
alert(Final);
alert(typeof Final);

// Month to Season

function MonthToSeason(Month) {
    if (Month >= 1 && 3 >= Month) {
        return alert("Your season is: Spring, Fisrt season")
    }

    if (Month >= 4 && 6 >= Month) {
        return alert("Your season is: Summer, Second season")
    }

    if (Month >= 7 && 9 >= Month) {
        return alert("Your season is: Fall, Third season")
    }

    if (Month >= 10 && 12 >= Month) {
        return alert("Your season is: Winter, Fourth season")
    }
}

const Season = Number(prompt("Enter your month number: "));
const Last = MonthToSeason(Season);
alert(Last);

// Elevator

function Elevator(Left, Right, You) {
    if (You - Left > You - Right) {
        return alert("Right Elevator is coming...");
    }

    if (You - Left < You - Right) {
        return alert("Left Elevator is coming...");
    }
}

const You = Number(prompt("Tell me your situation: "));
const Right = Number(prompt("Tell me right Elevator situation: "));
const Left = Number(prompt("Tell me left Elevator situation: "));
const Answer = Elevator(Left, Right, You);