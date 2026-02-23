// const addButtons = document.querySelectorAll('.addtobag');
// const bagText = document.querySelector('.bag-text');

// addButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         bagText.textContent = "You have items in your bag!";
//     });
// });

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});
