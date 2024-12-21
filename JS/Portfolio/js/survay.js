document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const responseDiv = document.getElementById("form-response");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !email) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Update the success message
        responseDiv.textContent = "Thank you for your submission!";
        responseDiv.style.display = "block"; // Make the message visible
        responseDiv.style.color = "green"; // Optional: Add some style
        responseDiv.style.fontSize = "18px"; // Optional: Adjust text size

        console.log("Success message displayed!"); // Debugging

        form.reset(); // Reset the form
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});