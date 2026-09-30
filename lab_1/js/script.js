const cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product){
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    }

    else{
        const productItem = { name: product.name, price: product.price, quantity: 1};
        cart.push(productItem);
    }
     

    localStorage.setItem("cart", JSON.stringify(cart));
}

const buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach(button => {
    button.addEventListener("click", () => {

        const product = {name: button.dataset.name, price: Number(button.dataset.price)};

        addToCart(product);
    });
});
console.log(cart)