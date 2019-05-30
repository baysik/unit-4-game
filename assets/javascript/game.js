// number to match RNG
var mainRng = Math.floor((Math.random() * 120));
console.log(mainRng + "mainrng");

// crystal RNG
var blueRng = Math.floor((Math.random() * 12) + 1);
console.log(blueRng);

var greenRng = Math.floor((Math.random() * 12) + 1);
console.log(greenRng);

var redRng = Math.floor((Math.random() * 12) + 1);
console.log(redRng);

var yellowRng = Math.floor((Math.random() * 12) + 1);
console.log(yellowRng);


// starting total score
var totalScore = 0;

// wins and loss
var winCount = 0;
var lossCount = 0;

// initiate game
function initGame() {
    assignRandomNumberToMatch();
}

initGame()

// Load random number to match between 
function assignRandomNumberToMatch(){
    $("#number-to-match").text("Number to match:" + " " + mainRng);
}

// add every time a crystal is clicked
blueNumber = parseInt(blueRng);
greenNumber = parseInt(greenRng);
redNumber = parseInt(redRng);
yellowNumber = parseInt(yellowRng);

$("#blue-crystal").click(function(){
    totalScore = totalScore + blueNumber;
    $("#total-score").text("Total Score:" + " " + totalScore);
    if (totalScore === mainRng) {
        winCount++;
        $("#win-count").text("Wins: " + winCount);
        alert("you won!");
    } else if (totalScore > mainRng){
        lossCount++
        $("#loss-count").text("Losses: " + lossCount);
        alert("you lost!");
    };
});

$("#green-crystal").click(function(){
    totalScore = totalScore + greenNumber;
    $("#total-score").text("Total Score:" + " " + totalScore);
    if (totalScore === mainRng) {
        alert("you won!");
    } else if (totalScore > mainRng){
        alert("you lost!");
    };
});

$("#red-crystal").click(function(){
    totalScore = totalScore + redNumber;
    $("#total-score").text("Total Score:" + " " + totalScore);
    if (totalScore === mainRng) {
        alert("you won!");
    } else if (totalScore > mainRng){
        alert("you lost!");
    };
});

$("#yellow-crystal").click(function(){
    totalScore = totalScore + yellowNumber;
    $("#total-score").text("Total Score:" + " " + totalScore);
    if (totalScore === mainRng) {
        alert("you won!");
    } else if (totalScore > mainRng){
        alert("you lost!");
    };
});

// everytime the player wins update the score by 1

if (totalScore == mainRng) {
    alert("you won!");
} else if (totalScore > mainRng){
    alert("you lost!");
};

// everytime the player loses update the score by 1
