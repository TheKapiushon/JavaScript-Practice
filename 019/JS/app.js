function render() {
    const sec = document.getElementById("prod")
    const temp = products.map((product) => {
        return `<div>
        <img src="${product.image}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <h3>${product.price}$</h3>
        <span>Rate: ${product.rating.rate} | Count: ${product.rating.count}</span>
        ${BASKET.find((item) => item.id === product.id)
                ? `<button disabled class="active">Inside</button>`
                : `<button onclick="handleAddToBasket(${product.id})">Add To Box</button>`
            }
        </div > `
    })

    sec.innerHTML = temp.join("")
    document.getElementById("basket").textContent = BASKET.length;
}

function basketRender() {
    const sec = document.getElementById("prod")

    if (BASKET.length) {
        const temp = BASKET.map((product) => {
            return `<div class="basket">
            <img src="${product.image}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <h3>${product.price}$</h3>
            <span>Rate: ${product.rating.rate} | Count: ${product.rating.count}</span>
            <button onclick="handleDelete()" class="red">Delete</button > 
            </div >`
        })
        sec.innerHTML = temp.join("")
    } else {
        sec.innerHTML = `<h1>There is still no product!!</h1>`
    }
    document.getElementById("count").textContent = BASKET.length;
}

window.addEventListener("scroll", () => {

    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

render()
