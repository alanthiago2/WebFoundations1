// Arrays of sentence fragments

// Add an array of at least 5 Hero Adjectives
let heroAdjectives = ["Super", "Awesome", "Incredible", "Fantastic", "Superior"];
// Add an array of at least 5 Hero Nouns
let heroNouns = ["Man", "Woman", "Titan", "Elastic", "Magnificent"];
// Add an array of at least 5 Super Hero Powers
let heroPowers = ["Flight", "Super Strength", "Invisibility", "Super Speed", "Super Intelligence"];
// Add an array of at least 5 Super Hero Purpose/Mission Statements
let heroMissions = ["To protect the world", "To save the day", "To make the world a better place", "To save the world from evil", "To inspire hope"];


// Create a function to generate a random superhero name and description
function generateSuperHero() {
    // Generate a random index for each array
    let adjectiveIndex = Math.floor(Math.random() * heroAdjectives.length);
    let nounIndex = Math.floor(Math.random() * heroNouns.length);
    let powerIndex = Math.floor(Math.random() * heroPowers.length);
    let missionIndex = Math.floor(Math.random() * heroMissions.length);

    // Save the superhero name and description as variables
    let superHeroName = `${heroAdjectives[adjectiveIndex]} ${heroNouns[nounIndex]}`;
    let superHeroDescription = `With ${heroPowers[powerIndex]} powers, ${superHeroName} is dedicated to ${heroMissions[missionIndex]}.`;

    // Display the superhero name and description inside the DOM
    document.getElementById("hero-name").textContent = superHeroName;
    document.getElementById("hero-description").textContent = superHeroDescription;
}

// Add event listener to the button
document.getElementById("generate-button").addEventListener("click", generateSuperHero);
