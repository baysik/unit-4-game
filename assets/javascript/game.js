// number to match RNG
var mainRng;

// crystal RNG
var blueRng;

var greenRng;

var redRng;

var yellowRng;

var array = [];


// starting total score
var totalScore = 0;

// wins and loss
var winCount = 0;
var lossCount = 0;

// has game started
var gameStart = false;

initGame();
// initiate game
function initGame() {

    totalScore = 0;

    mainRng = Math.floor((Math.random() * (120-19)) + 19);
    console.log(mainRng + "mainrng");

    blueRng = Math.floor((Math.random() * 12) + 1);
    console.log(blueRng);
    array.push(blueRng);

    greenRng = Math.floor((Math.random() * 12) + 1);
    console.log(greenRng);
    array.push(greenRng);

    redRng = Math.floor((Math.random() * 12) + 1);
    console.log(redRng);
    array.push(redRng);

    yellowRng = Math.floor((Math.random() * 12) + 1);
    console.log(yellowRng);
    array.push(yellowRng);

    // duplicateCheck();
    resetDOM();

};

// function duplicateCheck(){
//     console.log(array + "array");
//     if (array[0] === array[1] || array[2] || array[3]){
//         initGame();
//     }
//     else if (array[1] === array[0] || array[2] || array[3]){
//         initGame();
//     }
//     else if (array[2] === array[1] || array[0] || array[3]){
//         initGame();
//     }
//     else if (array[3] === array[1] || array[2] || array[0]){
//         initGame();
//     }
// };

function startGame(){
    if(!gameStart){
        gameStart = true;
        checkGuess();
    }
};

function resetDOM(){
    $("#total-score").text("Total Score:" + " " + totalScore);
    $("#number-to-match").text("Number to match: " + mainRng);
    startGame();
}

function checkGuess(){
    $("#blue-crystal").click(function(){
        totalScore += blueRng;
        updateDOM();
        checkForWinOrLoss();
        console.log(blueRng)
    });

    $("#green-crystal").click(function(){
        totalScore += greenRng;
        updateDOM();
        checkForWinOrLoss();
        console.log(greenRng + "green");
    });

    $("#red-crystal").click(function(){
        totalScore += redRng;
        updateDOM();
        checkForWinOrLoss();
    });

    $("#yellow-crystal").click(function(){
        totalScore += yellowRng;
        updateDOM();
        checkForWinOrLoss();
    });
};

function checkForWinOrLoss(){
    if (totalScore === mainRng) {
        winCount++;
        $("#win-count").text("Wins: " + winCount);
        initGame();
    } else if (totalScore > mainRng){
        lossCount++
        $("#loss-count").text("Losses: " + lossCount);
        initGame();
    };
};

function updateDOM(){
    $("#total-score").text("Total Score: " + totalScore);
};
