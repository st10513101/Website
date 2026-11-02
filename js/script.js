document.addEventListener("DOMContentLoaded", function() {

// --- MODAL LOGIC (Gustav's Story) ---
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");

if (btn) {
btn.addEventListener("click", function() {
modal.style.display = "block";
});
}

if (closeBtn) {
closeBtn.addEventListener("click", function() {
modal.style.display = "none";
});
}

window.addEventListener("click", function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
});

// --- PIZZA GALLERY INTERACTION ---
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(img => {
img.addEventListener("click", function() {
alert("You clicked on: " + this.alt + "! It's delicious.");
});
});

});
// ==========================================
// FORM VALIDATION AND AJAX SUBMISSION
// ==========================================

// 1. ENQUIRY FORM LOGIC
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
enquiryForm.addEventListener("submit", function(event) {
event.preventDefault(); // Stop normal page reload

let isValid = true;

// Get values
const name = document.getElementById("enqName").value;
const email = document.getElementById("enqEmail").value;
const type = document.getElementById("enqType").value;

// Simple Client-Side Validation
if (name.length < 3) {
document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
isValid = false;
} else {
document.getElementById("nameError").innerText = "";
}

// If everything is valid, do the AJAX simulation
if (isValid) {
// Here we simulate an AJAX request (like using fetch to send to a server)
// Since we don't have a backend, we will just simulate a delay and show a message.

const submitBtn = enquiryForm.querySelector("button");
submitBtn.innerText = "Sending...";
submitBtn.disabled = true;

setTimeout(() => { // Simulating network delay
document.getElementById("enqSuccessMsg").style.display = "block";

// Customize the response based on what they enquired about!
let responseText = "Thank you! We have received your enquiry.";
if (type === "catering") {
responseText += " Our catering costs start at R150 per person, and we have availability next weekend.";
} else if (type === "table") {
responseText += " Tables are available. A team member will confirm your booking shortly.";
}

document.getElementById("enqSuccessMsg").innerText = responseText;

// Reset form
enquiryForm.reset();
submitBtn.innerText = "Submit Enquiry";
submitBtn.disabled = false;
}, 1500);
}
});
}

// 2. CONTACT FORM LOGIC
const contactForm = document.getElementById("contactForm");
if (contactForm) {
contactForm.addEventListener("submit", function(event) {
event.preventDefault();

let isValid = true;
const phone = document.getElementById("conPhone").value;
const message = document.getElementById("conMessage").value;

// Validate phone (must be numbers only, length 10 based on our pattern)
if (!/^\d{10}$/.test(phone)) {
document.getElementById("phoneError").innerText = "Please enter a valid 10-digit phone number.";
isValid = false;
} else {
document.getElementById("phoneError").innerText = "";
}

// Validate message length
if (message.length < 10) {
document.getElementById("msgError").innerText = "Message must be at least 10 characters long.";
isValid = false;
} else {
document.getElementById("msgError").innerText = "";
}

if (isValid) {
const submitBtn = contactForm.querySelector("button");
submitBtn.innerText = "Sending...";
submitBtn.disabled = true;

// Simulate AJAX sending the data
setTimeout(() => {
document.getElementById("conSuccessMsg").style.display = "block";
document.getElementById("conSuccessMsg").innerText = "Message sent successfully! We will reply to your email soon.";

contactForm.reset();
submitBtn.innerText = "Send Message";
submitBtn.disabled = false;
}, 1500);
}
});
}