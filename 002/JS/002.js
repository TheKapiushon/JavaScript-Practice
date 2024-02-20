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