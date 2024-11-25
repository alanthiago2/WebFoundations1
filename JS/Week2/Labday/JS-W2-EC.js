// Make an Object Constructor 
function Game(title, developer, genre, releaseYear)
// Add at least 4 properties. 
{
    this.title = title; // The game's title
    this.developer = developer; // The developer of the game
    this.genre = genre; // The genre of the game (e.g., Action, RPG)
    this.releaseYear = releaseYear; // The year the game was released
}
// Create at least 3 instances of the Object Constructor 
const game1 = new Game("Skyrim", "Bethesda Game Studios", "RPG", 2011);
const game2 = new Game("Assassin's Creed", "Ubisoft", "Action-Adventure", 2007);
const game3 = new Game("Grand Theft Auto V", "Rockstar Games", "Action-Adventure", 2013);

// Add the instances to an Array variable 
const games = [game1, game2, game3];
// Create a method that combines at least 2 invoked properties from the instances. 
Game.prototype.getGameSummary = function () {
    return `${this.title}, developed by ${this.developer}, is a ${this.genre} game released in ${this.releaseYear}.`;
    // Combines the title, developer, genre, and release year into a summary string
};
// Call the method to display on the DOM or log inside the Console.
games.forEach(game => {
    console.log(game.getGameSummary()); // Logs each game's summary to the console
});