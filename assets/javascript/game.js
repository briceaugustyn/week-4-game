// Game-4-week

// Object Game

    // 1 set global init
    // 2 Inititalize Game
    // 3 Randomely assign image a number
    // 3 set Event Handler Adding listener on images only
    // 4 OnImageClick() Add the image number to Totalscore
    // 5 Logic:
    // If Totalscore> Number function Lose() random()
    // If Totalscore== Number function Win()
    // Lose function update Lose html
    // Win function update Win html
       



var game = {
// Make our variables global to the runtime of our application
Win: "",
Loses:"",
Number:"",
Totalscore:"",

// Use a function to initialize our Game.
initializeGame: function () {
   
    game.Win = "";
    game.Loses = "";
    game.Number = "";
    game.Totalscore = "";
    game.Image1Value="";
    game.Image2Value="";
    game.Image3Value="";
    game.Image4Value="";
    //$("#Crystal1, #Crystal2, #Crystal2, #Crystal3, #Number, #Total_score").empty();
},

setupEventHandlers: function () {
   
    //  $("#image").on("click", function() {
    //     // ... we trigger an alert.
    //     alert("I've been clicked!");
    //   });


    // Add an on click listener to all elements that have the class "number"
    $("#Crystal1").on("click", game.onImageClick);

    // $("#image").on("click", function() {
    //     // ... we trigger an alert.
    //     alert("I've been clicked!");
    // });

    // // Add an on click listener to all elements that have the class "operator"
    // $(".operator").on("click", onOperatorClick);

    // // Add an on click listener to all elements that have the class "equal"
    // $(".equal").on("click", onEqualClick);

    // // Add an on click listener to all elements that have the class "clear"
    // $(".clear").on("click", initializeCalculator);
}
,
onImageClick: function () {

    $("#Crystal1").text("hi");
    this.Totalscore =  $(this).val();
    alert ("Image total number: "+this.Totalscore)

    // // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
    // if (isOperatorChosen) {
    //     secondNumber += $(this).val();
    //     $("#second-number").text(secondNumber);
    // }
    // else {
    //     firstNumber +=  $(this).val();
    //     $("#first-number").text(firstNumber);
    // }
}
,



Suffle_Number: function () {
    for (i = 1 ; i < 12; i++) {
        game.Image1Value=Math.floor(Math.random() * (i +1))
        game.Image2Value=Math.floor(Math.random() * (i +1))
        game.Image3Value=Math.floor(Math.random() * (i +1))
        game.Image4Value=Math.floor(Math.random() * (i +1))
}
}
,


// onOperatorClick: function () {
//     // Check if a first number has already been selected
//     // Or we've already run a calculation, if so we just exit.
//     if (!firstNumber || isCalculated){ return; }

//     // Set isOperatorChosen to true so we start writing to secondNumber
//     isOperatorChosen = true;

//     // Store off the operator
//     operator =  $(this).val();

//     // Set the HTML of the #operator to the text of what was clicked
//     $("#operator").text($(this).text());
// }
// ,
// onEqualClick: function () {
//     // If we already clicked equal, don't do the calculation again
//     if (isCalculated){ return; }

//     // If the user has not selected a second number, don't calculate
//     if (secondNumber === ""){ return; }

//     // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
//     isCalculated = true;

//     // Use parseInt to convert our string representation of numbers into actual integers
//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);

//     result = calculateResult(firstNumber, operator, secondNumber);
//     $("#result").text(result);
// }
// ,
// calculateResult: function (firstNumber, operator, secondNumber) {
//     var result = "error";

//     // Based on the operator that was chosen.
//     // Then run the operation and set the HTML of the result of that operation
//     if (operator === "plus") {
//         result = firstNumber + secondNumber;
//     }

//     else if (operator === "minus") {
//         result = firstNumber - secondNumber;
//     }

//     else if (operator === "times") {
//         result = firstNumber * secondNumber;
//     }

//     else if (operator === "divide") {
//         result = firstNumber / secondNumber;
//     }

//     else if (operator === "power") {
//         result = Math.pow(firstNumber, secondNumber);
//     }

//     return result;
//}



}


$(document).ready(function() {

    
    //      $("#image").on("click", function() {
    //     // ... we trigger an alert.
    //     alert("I've been clicked!");
    //   });

    game.initializeGame()
    game.setupEventHandlers()
    game.Suffle_Number()
alert(game.Image1Value)

});

