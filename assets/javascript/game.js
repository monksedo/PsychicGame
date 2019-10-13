
// var charArr = ["a", "b", "c"]; // Testing array
var charArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
   "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Setup this emply array to hold the random alphabet character
var charEntered = [];

// This variable will store a random character
var randomChar = null;

// This is what we'll use to count down
var trialLelf = 9;

// Variables correct and incorrect counts
var correctCnt = 0;
var incorrectCnt = 0;

// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar

var trialLelfUpdate = function () {

   // Here we are grabbing the HTML element and setting it equal to the guessesLeft.

   // (i.e. guessesLeft will get displayed in HTML)

   document.querySelector("#trialLelf").innerHTML = trialLelf;

};

var randomCharUpdate = function () {

   // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)

   randomChar = charArr[Math.floor(Math.random() * charArr.length)];

};

var charEnteredUpdate = function () {

   // Here we take the guesses the user has tried -- then display it as letters separated by commas.

   document.querySelector("#charEntered").innerHTML = charEntered.join(", ");
};

// Function will be called when we reset everything

var resetPage = function () {

   trialLelf = 9;

   charEntered = [];

   trialLelfUpdate();

   randomCharUpdate();

   charEnteredUpdate();
};

// Run this function on html page downloading.
trialLelfUpdate();
randomCharUpdate();

// This function will capture the keyboard clicks.
document.onkeyup = function (e) {

   // It's going to reduce the guesses by one
   trialLelf--;

   // Lowercase the letter
   var char = String.fromCharCode(e.which).toLowerCase();

   // Then add the guess to the guessedLetters array
   charEntered.push(char);

   // Then its going to run the update functions
   trialLelfUpdate();
   charEnteredUpdate();

   // We'll check if there's a match.
   if (char === randomChar) {

      // If there is then we win and we'll update the HTML to display the win.
      correctCnt++;

      document.querySelector("#correct").innerHTML = correctCnt;
      // Then we'll reset the game

      resetPage();
   }

   // If we are out of guesses...
   if (trialLelf === 0) {

      // Then we will loss and we'll update the HTML to display the loss.
      incorrectCnt++;

      document.querySelector("#incorrect").innerHTML = incorrectCnt;

      // Then we'll call the reset.
      resetPage();

   }

};
