// Beispiel-Daten für den Warenkorb
const cartItems = [
    {
        id: 1,
        name: "3DS Duo-Pack",
        price: 150.5,
        image: "https://web-modules.dev/storage/apicontents/productImages/98mcrg3bpCMhbEauyRYX.jpg",
        quantity: 1,
    },
    {
        id: 2,
        name: "Graue Couch",
        price: 300,
        image: "https://web-modules.dev/storage/apicontents/productImages/0gV0eG4kIk9IXmWb1en3.jpg",
        quantity: 2,
    },
];

// Funktion zum Befüllen des Warenkorbs
function populateCart() {
    const cartSection = document.getElementById("cart-section");
    const totalPriceEl = document.getElementById("total-price");

    cartSection.innerHTML = ""; // Vorherige Inhalte leeren
    let totalPrice = 0;

    cartItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <p class="cart-item-title">${item.name}</p>
        <p class="cart-item-price">${item.price.toFixed(2)} CHF x ${item.quantity}</p>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">Entfernen</button>
    `;

        cartSection.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceEl.textContent = `Gesamtpreis: ${totalPrice.toFixed(2)} CHF`;

    // Entfernen-Buttons hinzufügen
    const removeButtons = document.querySelectorAll(".cart-item-remove");
    removeButtons.forEach((button) => {
        button.addEventListener("click", removeCartItem);
    });
}

// Funktion zum Entfernen eines Artikels
function removeCartItem(event) {
    const itemId = parseInt(event.target.getAttribute("data-id"));
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1); // Artikel aus dem Array entfernen
        populateCart(); // Warenkorb aktualisieren
    }
}

// Beim Laden der Seite den Warenkorb befüllen
document.addEventListener("DOMContentLoaded", populateCart);
