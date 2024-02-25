// Random Background

function randomBg() {

    const backgrounds = ['./Images/1.jpg', './Images/2.webp', './Images/3.jpg', './Images/4.jpg', './Images/5.jpg', './Images/6.webp'];
    const randomBack = Math.floor(Math.random() * backgrounds.length)

    document.body.style.background = `url(${backgrounds[randomBack]})`;
}
