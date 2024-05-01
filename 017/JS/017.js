let products = [
    {
        id: 1,
        title: 'محصول اول',
        price: '32000',
        date: '1596902113'
    },
    {
        id: 2,
        title: 'محصول دوم',
        price: '46000',
        date: '1555891200'
    },
    {
        id: 3,
        title: 'محصول سوم',
        price: '20000',
        date: '1515369600'
    },
    {
        id: 4,
        title: 'محصول چهارم',
        price: '88000',
        date: '1509580800'
    },
    {
        id: 5,
        title: 'محصول پنجم',
        price: '11000',
        date: '1477267200'
    }
];

const section = document.getElementById("section")

function render() {

    const temp = products.map((item) => {
        return `<div class="pros">
        <h2>${item.title}</h2>
        <span>${item.price}</span>
        <h3>${item.date}</h3>
        </div>`
    })

    section.innerHTML = temp.join("");
}

function Changes() {

    const span = document.querySelectorAll("span");
    const date = document.querySelectorAll("h3");

    for (let i = 0; i < date.length; i++) {
        const dateOrg = date[i].textContent;
        const dateList = new Date(Number(dateOrg) * 1000);
        const result = dateList.toLocaleDateString('en-US');
        date[i].style.backgroundColor = "beige";
        date[i].innerHTML = result
    }

    for (let i = 0; i < span.length; i++) {
        const changedNum = Number(span[i].textContent) / 2;
        span[i].style.backgroundColor = "beige";
        span[i].innerHTML = changedNum
    }
}

render();
