const cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsContainer = document.querySelector(".products-in-cart");

cart.forEach(product => {
    const productElement = document.createElement("div");

    productElement.classList.add("product-in-cart");

    productElement.innerHTML = `
        <div class="column">
            <img src="images/${product.name.toLowerCase()}.jpg" alt="${product.name.toLowerCase()} pic" width="80">
            <h3>${product.name}</h3>
            <button class="plus">+</button>
            <span class="quantity">${product.quantity}</span>
            <button class="minus">-</button>
        </div>

        <div class="column">
            <p>$${product.price}</p>
            <button class="remove">Remove</button>
        </div>
    `;

    productsContainer.appendChild(productElement);

    const plusButton = productElement.querySelector(".plus");
    const minusButton = productElement.querySelector(".minus");
    const quantityElement = productElement.querySelector(".quantity");
    const removeButton = productElement.querySelector(".remove")

    plusButton.addEventListener("click", () => {
        product.quantity += 1;
        quantityElement.textContent = product.quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
    });
    minusButton.addEventListener("click", () => {
        if (product.quantity > 1) {
            product.quantity -= 1;
            quantityElement.textContent = product.quantity;
            localStorage.setItem("cart", JSON.stringify(cart));
    }});
    removeButton.addEventListener("click", () => {
        const index = cart.indexOf(product);

        cart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        productElement.remove();
    });
});




