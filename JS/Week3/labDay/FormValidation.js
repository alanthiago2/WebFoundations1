function validateInput(event) {
    event.preventDefault(); // Prevent the form from submitting

    const numberInput = document.getElementById("numberInput").value;
    const validationMessage = document.getElementById("validationMessage");

    // Clear any previous validation messages
    validationMessage.textContent = "";

    // Check if the input is a number between 1 and 10
    if (numberInput >= 1 && numberInput <= 10) {
      validationMessage.textContent = "The number is valid!";
      validationMessage.className = "success";
    } else {
      validationMessage.textContent = "Please enter a number between 1 and 10.";
      validationMessage.className = "error";
    }
  }