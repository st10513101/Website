// ==========================================
// GUSTAV'S PIZZA - PRODUCT PAGE LOGIC
// ==========================================

// 1. Create the data (This simulates a database)
const pizzas = [
{ name: "Margherita", price: "R90", desc: "Tomato base, mozzarella, fresh basil." },
{ name: "Pepperoni", price: "R110", desc: "Tomato base, double pepperoni, cheese." },
{ name: "Veggie Supreme", price: "R105", desc: "Mushrooms, peppers, onions, olives." },
{ name: "Meat Lovers", price: "R130", desc: "Bacon, ham, sausage, pepperoni." },
{ name: "Hawaiian", price: "R100", desc: "Ham and pineapple (the classic debate)." },
{ name: "Four Cheese", price: "R115", desc: "Mozzarella, cheddar, feta, and parmesan." }
];

// 2. Grab the HTML elements we need
const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

// 3. Function to display the pizzas on the page
function displayProducts(productList) {
// Only run this if we are actually on the products page
if (!productContainer) return;

productContainer.innerHTML = ""; // Clear current display

if (productList.length === 0) {
productContainer.innerHTML = "<p>No pizzas found. Try a different search.</p>";
return;
}

// Loop through the list and create HTML for each one
productList.forEach(pizza => {
const card = document.createElement("div");
card.classList.add("product-card");

// Dynamic DOM Manipulation to build the card
card.innerHTML = `
<h3>${pizza.name}</h3>
<p class="product-price">${pizza.price}</p>
<p>${pizza.desc}</p>
`;

productContainer.appendChild(card);
});
}

// 4. Initial load (show all pizzas when the page opens)
if (productContainer) {
displayProducts(pizzas);
}

// 5. Search Filter Functionality
if (searchInput) {
searchInput.addEventListener("input", function(e) {
const searchTerm = e.target.value.toLowerCase();

// Filter the array based on the search term
const filteredPizzas = pizzas.filter(pizza => {
return pizza.name.toLowerCase().includes(searchTerm) ||
pizza.desc.toLowerCase().includes(searchTerm);
});

// Update the display with the filtered list
displayProducts(filteredPizzas);
});
}
<script src="js/product.js"></script>