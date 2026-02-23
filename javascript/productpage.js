// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Add to Cart
function addToCart(pizzaName) {
    alert(pizzaName + " added to cart!");
}