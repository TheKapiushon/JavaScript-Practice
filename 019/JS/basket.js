function handleAddToBasket(prodId) {
    const findedBook = products.find((product) => product.id === prodId);
    BASKET.push(findedBook);
    document.getElementById("basket").textContent = BASKET.length;
    render();
}

function handleDelete(prodId) {
    const index = BASKET.findIndex((product) => product.id === prodId);
    BASKET.splice(index, 1);
    basketRender();
}
