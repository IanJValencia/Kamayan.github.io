// contact.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  const contactForm = document.getElementById("contact-form");

  // Add an event listener for form submission
  contactForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    const formData = new FormData(contactForm);

    // Perform form validation
    if (!validateForm(formData)) {
      return;
    }

    // If form validation passes, you can do something with the form data here.
    // For example, you can send it to the server using AJAX or fetch.

    // Clear the form after submission (optional)
    contactForm.reset();
  });
});

function validateForm(formData) {
  // Get form fields values
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  // Perform your validation here
  if (!name || !phone || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  // Additional validation rules if needed
  // ...

  // Return true if form is valid
  return true;
}
