


let cart = [];

function addToCart(productId, productName, productPrice, productImage) {
    let productExists = cart.find(item => item.id === productId);

    if (productExists) {
        productExists.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

    updateCartUI();
}

function updateCartUI() 
{
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        const tr = document.createElement('tr');

       
        const imgTd = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.style.width = '50px'; // Set the width of the image to display it in small size
        imgTd.appendChild(img);

       
        const nameTd = document.createElement('td');
        nameTd.textContent = item.name;

       
        const quantityTd = document.createElement('td');
        quantityTd.textContent = item.quantity;

       
        const priceTd = document.createElement('td');
        priceTd.textContent = `$${item.price.toFixed(2)}`;

        
        const totalTd = document.createElement('td');
        totalTd.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

       
        const actionTd = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'btn-remove';
        removeButton.onclick = () => removeFromCart(index);
        actionTd.appendChild(removeButton);

        tr.appendChild(imgTd);
        tr.appendChild(nameTd);
        tr.appendChild(quantityTd);
        tr.appendChild(priceTd);
        tr.appendChild(totalTd);
        tr.appendChild(actionTd);

        cartItemsElement.appendChild(tr);

        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;

    const cartButton = document.getElementById('floating-cart-button');
    cartButton.textContent = `Cart (${cart.length})`;
    cartButton.style.display = 'block';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}


window.onload = function () {
    initFloatingCartButton();

    // Automatically add products to the cart when the page loads
    addToCart(1, 'Product Name 1', 29.99, '../assets/img/prime-series/prime1.png'); // Example product 1
    addToCart(2, 'Product Name 2', 39.99, '../assets/img/prime-series/ps2.png.jpg'); // Example product 2
    addToCart(3, 'Product Name 3', 49.99, '../assets/img/prime-series/ps3.png.jpg'); // Example product 3
    addToCart(4, 'Product Name 4', 59.99, '../assets/img/prime-series/ps4.png.jpg'); // Example product 4
    addToCart(5, 'Product Name 5', 69.99, '../assets/img/prime-series/ps5.jpg'); // Example product 5
    addToCart(6, 'Product Name 5', 69.99, '../assets/img/prime-series/ps6.png.jpg'); // Example product 5
    addToCart(7, 'Product Name 5', 69.99, '../assets/img/prime-series/ps7.png.jpg'); // Example product 5
    addToCart(8, 'Product Name 5', 69.99, '../assets/img/prime-series/ps.8.png.jpg'); // Example product 5
    addToCart(9, 'Product Name 5', 69.99, '../assets/img/prime-series/ps9.png.jpg'); // Example product 5
    addToCart(10, 'Product Name 5', 69.99, '../assets/img/prime-series/ps10.png.jpg'); // Example product 5
    addToCart(11, 'Product Name 5', 69.99, '../assets/img/prime-series/ps11.png.jpg'); // Example product 5
    addToCart(12, 'Product Name 5', 69.99, '../assets/img/prime-series/ps12.png.jpg'); // Example product 5
    addToCart(10, 'Product Name 5', 69.99, '../assets/img/prime-series/ps10.png.jpg'); // Example product 5
    addToCart(10, 'Product Name 5', 69.99, '../assets/img/prime-series/ps10.png.jpg'); // Example product 5
    // Add more products as needed
};


function initFloatingCartButton() {
    const button = document.createElement('button');
    button.id = 'floating-cart-button';
    button.style.position = 'fixed';
    button.style.bottom = '80px';
    button.style.right = '10px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#FF5733';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.display = 'none';
    button.addEventListener('click', scrollToCart);
    document.body.appendChild(button);
}

function scrollToCart() {
    const cartSummary = document.getElementById('cart-summary');
    cartSummary.scrollIntoView({ behavior: 'smooth' });
}
