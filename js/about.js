// ==========================================
// GUSTAV'S PIZZA - ABOUT US (MODAL LOGIC)
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

// Grab the modal elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");

// 1. Open modal when button is clicked
if (btn) {
btn.addEventListener("click", function() {
modal.style.display = "block";
});
}

// 2. Close modal when the 'X' is clicked
if (closeBtn) {
closeBtn.addEventListener("click", function() {
modal.style.display = "none";
});
}

// 3. Close modal if the user clicks anywhere outside of the modal box
window.addEventListener("click", function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
});

});