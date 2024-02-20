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