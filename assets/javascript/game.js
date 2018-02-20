// Game-4-week

// Object Game

    
   
    
    
    // 5 OnImageClick() Add the image number to Totalscore
    // 6 Logic:
    // If Totalscore> Number function Lose() random()
    // If Totalscore== Number function Win()
    // 7Lose function update Lose html
    // 8 Win function update Win html
       


var game = {
// 1 set global init
// Make our variables global to the runtime of our application

// 2 Inititalize Game
// Use a function to initialize our Game.
initializeGame: function () {
   
    game.Win = "";
    game.Loses = "";
    game.Number = "0";
    game.Totalscore = "0";
    game.Image1Value="";
    game.Image2Value="";
    game.Image3Value="";
    game.Image4Value="";
    //$("#Crystal1, #Crystal2, #Crystal3, #Crystal4, #Number, #Total_score").empty();
},

// 3 Randomely assign value to image
Suffle_Number: function () {

    for (i = 1 ; i < 39; i++) {
        game.Number = Math.floor(Math.random() * (i +1));
        
    }
    console.log("game number "+ game.Number)
    for (i = 1 ; i < 12; i++) {
        game.Image1Value=Math.floor(Math.random() * (i +1))
        game.Image2Value=Math.floor(Math.random() * (i +1))
        game.Image3Value=Math.floor(Math.random() * (i +1))
        game.Image4Value=Math.floor(Math.random() * (i +1))
}
console.log("image values: "+game.Image1Value,game.Image2Value,game.Image3Value,game.Image4Value)
}
,

// 4 set Event Handler Adding listener on images only
setupEventHandlers: function () {
   
    //  $("#image").on("click", function() {
    //     // ... we trigger an alert.
    //     alert("I've been clicked!");
    //   });


    // Add an on click listener to all elements that have the class "number"
    $("#Crystal1").on("click", game.onCrystal1Click);
    $("#Crystal2").on("click", game.onCrystal2Click);
    $("#Crystal3").on("click", game.onCrystal3Click);
    $("#Crystal4").on("click", game.onCrystal4Click);
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
onCrystal1Click: function () {

    // $("#Crystal1").text("hi");
    // this.Totalscore =  $(this).val();
    // alert ("Image total number: "+this.Totalscore)
    
    //var image_number=$(this).val();

    
    alert("image number"+game.Image1Value)
    var numb=parseInt(game.Number) + parseInt(game.Image1Value)
    game.Number=numb
    alert("Number"+numb)
    console.log(game.Number)

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

onCrystal2Click: function () {

    alert("image number"+game.Image2Value)
    var numb=parseInt(game.Number) + parseInt(game.Image2Value)
    game.Number=numb
    alert("Number"+numb)
    console.log(game.Number)



}
,

onCrystal3Click: function () {

    alert("image number"+game.Image3Value)
    var numb=parseInt(game.Number) + parseInt(game.Image3Value)
    game.Number=numb
    alert("Number"+numb)
    console.log(game.Number)
}
,

onCrystal4Click: function () {

    alert("image number"+game.Image4Value)
    var numb=parseInt(game.Number) + parseInt(game.Image4Value)
    game.Number=numb
    alert("Number"+numb)
    console.log(game.Number)

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
    game.Suffle_Number()
    game.setupEventHandlers()


});

