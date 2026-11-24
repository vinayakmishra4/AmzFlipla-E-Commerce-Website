
let cartCount = 0;

// Add to Cart
function addToCart() {
    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert("Product successfully added to cart!");
}

// Search Products
function searchProducts() {
    const input = document.getElementById("searchInput")
        .value.toLowerCase().trim();

    const products = document.querySelectorAll(".product-card");
    let found = 0;

    products.forEach(product => {
        const name = product.dataset.name.toLowerCase();

        if (name.includes(input)) {
            product.style.display = "block";
            found++;
        } else {
            product.style.display = "none";
        }
    });

    document.getElementById("noResults").hidden = found !== 0;
}

// Mobile Menu
function toggleMenu() {
    document.getElementById("mobileMenu")
        .classList.toggle("show");
}

// Newsletter
function subscribe(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    alert("Thank you for subscribing: " + email);

    event.target.reset();
}

// Search using Enter key
document.getElementById("searchInput")
    .addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });
