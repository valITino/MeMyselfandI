// Array mit Produkte-Daten
const products = [
    {
        id: 28,
        sku: 2105774,
        price: 150.5,
        name: "3DS Duo-Pack",
        image: "https://web-modules.dev/storage/apicontents/productImages/98mcrg3bpCMhbEauyRYX.jpg",
        description: "Der Handhelden zum Mitnehmen, für Mehrspielerspass gleich doppelt.",
        category: {
            id: 3,
            name: "Gaming",
        },
        likes_count: 113,
    },
    {
        id: 22,
        sku: 7063031,
        price: 995.95,
        name: "Kingsize Bett",
        image: "https://web-modules.dev/storage/apicontents/productImages/mIj9MSJkFsanRe1456yn.jpg",
        description: "Wunderschönes weisses Kingsize Bett mit passendem langem Beistelltisch.",
        category: {
            id: 2,
            name: "Möbel",
        },
        likes_count: 0,
    },
    {
        id: 21,
        sku: 6687404,
        price: 300,
        name: "Graue Couch",
        image: "https://web-modules.dev/storage/apicontents/productImages/0gV0eG4kIk9IXmWb1en3.jpg",
        description: "Gemütliche Sitzgelegenheit in hippem Design und zusätzlichen vier Kissen für perfekte Gemütlichkeit.",
        category: {
            id: 2,
            name: "Möbel",
        },
        likes_count: 1,
    },
    {
        id: 23,
        sku: 8489614,
        price: 99.95,
        name: "Kreativ-Desk",
        image: "https://web-modules.dev/storage/apicontents/productImages/nVS0d07Y3t3dCpA1oLPf.jpg",
        description: "Bürotisch mit Schubladen und passendem Stuhl. Ruhige Farbtöne runden dieses CO2-neutrale Holzprodukt ab.",
        category: {
            id: 2,
            name: "Möbel",
        },
        likes_count: 92,
    },
    {
        id: 24,
        sku: 1709091,
        price: 120.35,
        name: "Arcade Controller",
        image: "https://web-modules.dev/storage/apicontents/productImages/VRIW5sQCF72OdEc0mhQw.jpg",
        description: "Sammlerstück! Toller Nintendo Arcade Controller, extra gross für maximalen Spass.",
        category: {
            id: 3,
            name: "Gaming",
        },
        likes_count: 5,
    },
];

// Funktion zum dynamischen Hinzufügen von Produkten
function populateProducts() {
    const gamingSection = document.getElementById("gaming-products").querySelector(".product-list");
    const moebelSection = document.getElementById("moebel-products").querySelector(".product-list");

    // Produkte iterieren
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        // Produktdetails einfügen
        productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-details">
        <p class="product-title">${product.name}</p>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price.toFixed(2)} €</p>
      </div>
    `;

        // Produkt basierend auf der Kategorie in die richtige Sektion einfügen
        if (product.category.name === "Gaming") {
            gamingSection.appendChild(productCard);
        } else if (product.category.name === "Möbel") {
            moebelSection.appendChild(productCard);
        }
    });
}

// Eventlistener für DOMContentLoaded hinzufügen
document.addEventListener("DOMContentLoaded", populateProducts);
