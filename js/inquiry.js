// ==========================================
// GUSTAV'S PIZZA - FORM VALIDATION & AJAX
// ==========================================

// --- 1. ENQUIRY FORM LOGIC ---
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
enquiryForm.addEventListener("submit", function(event) {
event.preventDefault(); // Stop normal page reload

let isValid = true;

// Get values
const name = document.getElementById("enqName").value;
const type = document.getElementById("enqType").value;

// Simple Client-Side Validation (Name length)
if (name.length < 3) {
document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
isValid = false;
} else {
document.getElementById("nameError").textContent = "";
}

// If everything is valid, do the AJAX simulation
if (isValid) {
const submitBtn = enquiryForm.querySelector("button");
submitBtn.textContent = "Sending...";
submitBtn.disabled = true;

// Simulate AJAX request (Fake network delay)
setTimeout(() => {
document.getElementById("enqSuccessMsg").style.display = "block";

// Customize the response based on what they enquired about!
let responseText = "Thank you! We have received your enquiry.";
if (type === "catering") {
responseText += " Our catering costs start at R150 per person, and we have availability next weekend.";
} else if (type === "table") {
responseText += " Tables are available. A team member will confirm your booking shortly.";
}

document.getElementById("enqSuccessMsg").textContent = responseText;

// Reset form
enquiryForm.reset();
submitBtn.textContent = "Submit Enquiry";
submitBtn.disabled = false;
}, 1500);
}
});
}


// --- 2. CONTACT FORM LOGIC ---
const contactForm = document.getElementById("contactForm");

if (contactForm) {
contactForm.addEventListener("submit", function(event) {
event.preventDefault();

let isValid = true;
const phone = document.getElementById("conPhone").value;
const message = document.getElementById("conMessage").value;

// Validate phone (must be numbers only, length 10 based on our pattern)
if (!/^\d{10}$/.test(phone)) {
document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
isValid = false;
} else {
document.getElementById("phoneError").textContent = "";
}

// Validate message length
if (message.length < 10) {
document.getElementById("msgError").textContent = "Message must be at least 10 characters long.";
isValid = false;
} else {
document.getElementById("msgError").textContent = "";
}

if (isValid) {
const submitBtn = contactForm.querySelector("button");
submitBtn.textContent = "Sending...";
submitBtn.disabled = true;

// Simulate AJAX sending the data
setTimeout(() => {
document.getElementById("conSuccessMsg").style.display = "block";
document.getElementById("conSuccessMsg").textContent = "Message sent successfully! We will reply to your email soon.";

contactForm.reset();
submitBtn.textContent = "Send Message";
submitBtn.disabled = false;
}, 1500);
}
});
}
