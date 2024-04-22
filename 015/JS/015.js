let input = document.getElementById("input");
let result = document.getElementById("result");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");
let btn = document.getElementById("btn");
let option_form, option_to;


// input.addEventListener("keyup", myResult);
// inputType.addEventListener("change", myResult);
// resultType.addEventListener("change", myResult);

option_form = inputType.value;
option_to = resultType.value;

function myResult() {

    option_form = inputType.value;
    option_to = resultType.value;

    if (option_form === "meter" && option_to === "killometer") {
        result.value = Number(input.value) * 0.001;

    } else if (option_form === "meter" && option_to === "centimeter") {
        result.value = Number(input.value) * 100;

    } else if (option_form === "meter" && option_to === 'meter') {
        result.value = input.value
    }


    if (option_form === "killometer" && option_to === "meter") {
        result.value = Number(input.value) * 1000;

    } else if (option_form === "killometer" && option_to === "centimeter") {
        result.value = Number(input.value) * 100000;

    } else if (option_form === "killometer" && option_to === 'killometer') {
        result.value = input.value

    }


    if (option_form === "centimeter" && option_to === "killometer") {
        result.value = Number(input.value) * 0.00001;

    } else if (option_form === "centimeter" && option_to === "meter") {
        result.value = Number(input.value) * 0.01;

    } else if (option_form === "centimeter" && option_to === "centimeter") {
        result.value = input.value

    }
}
