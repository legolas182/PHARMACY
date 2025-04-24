// Variables
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cartModal');
const closeCart = document.querySelector('.close-cart');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.querySelector('.cart-count');
const totalElement = document.getElementById('total');

let cart = [];

// Abrir/Cerrar modal
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Añadir producto al carrito
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
    alert(`${name} se ha añadido al carrito!`);
}

// Actualizar carrito
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button class="remove-item" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartCount.textContent = cart.length;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Eliminar producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Inicializar carrito
updateCart();