// number to match RNG
var mainRng = Math.floor((Math.random() * (120-19)) + 19);
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
    resetTotalScoreToZero();
};

initGame()

// Load random number to match between 
function assignRandomNumberToMatch(){
    $("#number-to-match").text("Number to match:" + " " + mainRng);
}

function resetTotalScoreToZero(){
    $("total-score").text("Total:" + " " + totalScore); 
}

// add every time a crystal is clicked
blueNumber = parseInt(blueRng);
greenNumber = parseInt(greenRng);
redNumber = parseInt(redRng);
yellowNumber = parseInt(yellowRng);

$("#blue-crystal").click(function(){
    totalScore = totalScore + blueNumber;
    $("#total-score").text("Total Score:" + " " + totalScore);
    
    // everytime the player wins/loses update the score by 1
    if (totalScore === mainRng) {
        winCount++;
        $("#win-count").text("Wins: " + winCount);
    } else if (totalScore > mainRng){
        lossCount++;
        $("#loss-count").text("Losses: " + lossCount);
    };
});

$("#green-crystal").click(function(){
    totalScore = totalScore + greenNumber;
    $("#total-score").text("Total Score:" + " " + totalScore);

    // everytime the player wins/loses update the score by 1
    if (totalScore === mainRng) {
        winCount++;
        $("#win-count").text("Wins: " + winCount);
    } else if (totalScore > mainRng){
        lossCount++
        $("#loss-count").text("Losses: " + lossCount);
    };
});

$("#red-crystal").click(function(){
    totalScore = totalScore + redNumber;
    $("#total-score").text("Total Score:" + " " + totalScore);

    // everytime the player wins/loses update the score by 1
    if (totalScore === mainRng) {
        winCount++;
        $("#win-count").text("Wins: " + winCount);
    } else if (totalScore > mainRng){
        lossCount++
        $("#loss-count").text("Losses: " + lossCount);
    };
});

$("#yellow-crystal").click(function(){
    totalScore = totalScore + yellowNumber;
    $("#total-score").text("Total Score:" + " " + totalScore);

    // everytime the player wins/loses update the score by 1
    if (totalScore === mainRng) {
        winCount++;
        $("#win-count").text("Wins: " + winCount);
    } else if (totalScore > mainRng){
        lossCount++
        $("#loss-count").text("Losses: " + lossCount);
    };
});
console.log(totalScore);

