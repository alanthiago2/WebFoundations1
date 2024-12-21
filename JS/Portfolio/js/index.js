        // Add an Array of more things you like
        let likes = ["Coding and Web Development",
            "Traveling and Exploring New Cultures",
            "Snowboarding and Winter Sports",
            "Video Games and Virtual Worlds",
            "Photography",
            "Learning New Languages",
            "Hiking and Outdoor Adventures"]

        // Add Function to Show/Hide Extra Info on Button Click
        function revealExtraInfo() {
            const extraInfo = document.getElementById("extra-info");
            if (extraInfo.style.display === "none") {
                extraInfo.style.display = "block";
            } else {
                extraInfo.style.display = "none";
            }
        }

        // Add Function to display your additional interests
        function displayLikes() {
            const extraLikes = document.getElementById("extra-likes");
            extraLikes.textContent = likes.join(', ');
        }
// Call the function to write the likes to the extra-info DOM when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayLikes();
});

// Add an effect using JS to manipulate the nav DOM elements
const navLinks = document.querySelectorAll('nav a'); // Corrected selector
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => { 
        link.style.color = "#ff6347"; // Change to any color you like
    });
    link.addEventListener('mouseout', () => {
        link.style.color = "black"; // Revert back to the original color
    });
});