// Function to greet the user//
function greetUser() {
    const userName = prompt("What is your name?");
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    let greeting = "";
    if (currentHour >= 5 && currentHour < 12) {
        greeting = `Good Morning, ${userName}! Thank you for reviewing my resume site.`;
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = `Good Afternoon, ${userName}! Thank you for reviewing my resume site.`;
    } else {
        greeting = `Good Evening, ${userName}! Thank you for reviewing my resume site.`;
    }
    alert(greeting);
}