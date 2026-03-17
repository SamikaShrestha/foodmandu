
// Add to Cart
function addToCart(pizzaName) {
    alert(pizzaName + " added to cart!");
}

const dropdown = document.querySelector(".custom-dropdown");
const button = document.querySelector(".dropdown-btn");
const items = document.querySelectorAll(".dropdown-list li");

button.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        button.textContent = item.textContent;
        dropdown.classList.remove("active");
    });
});