// number to match RNG
var mainRng = Math.floor((Math.random() * 120) + 19);
console.log(blueRng);

// crystal RNG
var blueRng = Math.floor((Math.random() * 12) + 1);
console.log(blueRng);

var greenRng = Math.floor((Math.random() * 12) + 1);
console.log(greenRng);

var redRng = Math.floor((Math.random() * 12) + 1);
console.log(redRng);

var yellowRng = Math.floor((Math.random() * 12) + 1);
console.log(yellowRng);

var counter = 0;


// click blue crystal
$("#blue-crystal").click(function(){
    $("#total-score").text("Total Score:" + " " + blueRng)
})

// click green crystal
$("#green-crystal").click(function(){
    alert(greenRng);
})

// click red crystal
$("#red-crystal").click(function(){
    alert(redRng);
})

// click yellow crystal
$("#yellow-crystal").click(function(){
    alert(yellowRng);
})

// Load random number to match between 
var numberToMatch = $("#number-to-match").text("Number to match:" + " " + mainRng);

// add every time a crystal is clicked