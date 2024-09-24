
let cart = [];

function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'btn-remove';
        removeButton.onclick = () => removeFromCart(index);

        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);

        total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        let items = cart.map((item) => item.name).join(', ');
        alert(`Thank you for purchasing: ${items}`);
        cart = [];
        displayCart();
    }
}
