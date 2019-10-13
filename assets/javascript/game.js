// Setup a charArray to store 26 alphagets.
// var charArr = ["a", "b", "c"]; // Testing array
var charArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
   "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Setup this emply array to hold the random alphabet character.
var charEntered = [];

// This variable will store a random character.
var randomChar = null;

// This is what we'll use to count down.
var trialLelf = 9;

// Variables correct and incorrect counts.
var correctCnt = 0;
var incorrectCnt = 0;

// Below we created three functions to trialLeftUpdate(), ramdomCharUpdate(), and charEnteredUpdate().
var trialLelfUpdate = function () {
   document.querySelector("#trialLelf").innerHTML = trialLelf;
};

// Randomly sellect an array index then store the leter from the index to randomChar variable.
var randomCharUpdate = function () {
   randomChar = charArr[Math.floor(Math.random() * charArr.length)];
};

// Insert the letter from charEntered veriable to HTML location #charEntered.
var charEnteredUpdate = function () {
   document.querySelector("#charEntered").innerHTML = charEntered.join(", ");
};

// Reset the whole game to initial value.
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

// This function will capture the key pressed/released.
document.onkeyup = function (e) {
   trialLelf--; // Countdown.

   // convert the string to lower case.
   var char = String.fromCharCode(e.which).toLowerCase();

   // Store the string in the array charEntered[].
   charEntered.push(char);

   // Call these two functions.
   trialLelfUpdate();
   charEnteredUpdate();

   // Compare the string user entered (char) game seleted string.
   if (char === randomChar) {

      // Countup winning score.
      correctCnt++;

      document.querySelector("#correct").innerHTML = correctCnt;

      // call page reset function.
      resetPage();
   }

   // Compare if trialLelf is equal to 0.
   if (trialLelf === 0) {

      // increase the loss count if user run out of geueses without a match.
      incorrectCnt++;

      // Insert the loss count value to HTML location #incorrect.
      document.querySelector("#incorrect").innerHTML = incorrectCnt;

      // call resetPage function
      resetPage();

   }

}; // End of code
