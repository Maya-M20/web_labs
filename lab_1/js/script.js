const openBtns = document.querySelectorAll('.open');
const closeBtns = document.querySelectorAll('.close');

openBtns.forEach((openBtn) => {
    openBtn.addEventListener('click', () => {
        const product = openBtn.closest('.product');
        const dialog = product.querySelector('.modal');

        dialog.showModal();
    });
});

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        const dialog = closeBtn.closest('.modal');

        dialog.close();
    });
});

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