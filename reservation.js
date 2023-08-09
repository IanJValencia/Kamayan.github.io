// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Function to check the availability of the selected time slot
  function checkAvailability() {
    var selectedTime = document.getElementById("time").value;

    // Replace this array with your actual list of booked time slots
    var bookedTimeSlots = ["09:00 AM", "02:00 PM", "05:00 PM"];

    if (bookedTimeSlots.includes(selectedTime)) {
      alert("Sorry, the selected time slot is already booked. Please choose another time.");
      return false;
    }

    return true;
  }

  // Add event listener to the form submission
  document.getElementById("reservation-form").addEventListener("submit", function (event) {
    if (!checkAvailability()) {
      event.preventDefault();
    }
  });

  // Add an event listener to each navigation link (All pages)
  const navLinks = document.querySelectorAll(".header-right a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Get the target section to scroll to
      const targetSectionId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetSectionId);

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
