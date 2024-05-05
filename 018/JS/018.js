const fieldset = document.querySelector("fieldset")
const input = document.getElementById("Number")
const button = document.getElementById("submit")
const span = document.querySelector("span")

const value = input.value;
const pattern = /^989[0-9]{9}$/;
const result = pattern.test(value);

input.addEventListener("click", function () {
    fieldset.classList.add("blue-text");
    fieldset.classList.add("trans");
    fieldset.classList.add("blue-back");
});

function handlePhoneNumber() {
    const value = input.value;
    const pattern = /^989[0-9]{9}$/;
    const result = pattern.test(value);

    if (result) {
        button.classList.add("succes");
    } else {
        button.classList.remove("succes");
    }
}

function checkNum() {
    const value = input.value;
    const pattern = /^989[0-9]{9}$/;
    const result = pattern.test(value);

    if (!result) {
        span.innerHTML = "شماره شما صحیح نمیباشد*"
        span.classList.add("red")
    } else if (result) {
        span.innerHTML = ""
        fieldset.innerHTML = `<p>کد ارسال شده را در کادر زیر وارد کنید</p>
        <legend>ارسال کد</legend>
        <input type="text" id="Number" placeholder="کد">
        <span></span>
        <input onclick="done()" id="submit" type="submit" value="ثبت کد">`
    }

}

function done() {
    if (input != "") {
        fieldset.innerHTML = `شما با موفقیت وارد شدید`
        fieldset.classList.add("succes")
    }
}
