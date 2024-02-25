// Random Background

function randomBg() {

    const backgrounds = ['./Images/1.jpg', './Images/2.webp', './Images/3.jpg', './Images/4.jpg', './Images/5.jpg', './Images/6.webp'];
    const randomBack = Math.floor(Math.random() * backgrounds.length)

    document.body.style.background = `url(${backgrounds[randomBack]})`;
}

// No chance

function Chance() {
    
    const Num = Math.floor(Math.random() * 100)
    
    if (Num < 40) {
        document.body.style.background = 'red'
        document.body.innerHTML = '<h1>Pitty<h1/>'
    }
    if (Num > 40 && 70 > Num) {
        document.body.style.background = 'yellow'
        document.body.innerHTML = '<h1>So Close<h1/>'
    }
    if (Num > 70) {
        document.body.style.background = 'green'
        document.body.innerHTML = '<h1>Awesome<h1/>'
    }
}
