// js/script.js

function goBack() {
    // Always navigate to the projects section on the homepage
    window.location.href = "index.html#projects";
}
// contact.js

// Initialize EmailJS
(function () {
    emailjs.init("bD1OUDzL-JXnHDd6Q"); // Replace with your EmailJS Public Key
})();

// Wait until the DOM is fully loaded before attaching event listener
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_zi0khxw", "template_gaaqr9h", form)
                .then(function () {
                    alert("Message sent! I will get back to you soon.");
                }, function (error) {
                    alert("Failed to send message. Please try again.");
                    console.error("EmailJS Error:", error);
                });
        });
    } else {
        console.error("Contact form not found in the DOM.");
    }
});

