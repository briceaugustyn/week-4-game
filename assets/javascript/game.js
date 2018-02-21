// Game-4-week

// Define Object Game
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

    for (i = 18 ; i < 120; i++) {
        game.Number = Math.floor(Math.random() * (i +1));
        this.Display_Init(game.Number)
        
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
   
    
    // Add an on click listener to all elements that have the class "number"
    $("#Crystal1").on("click", game.onCrystal1Click);
    $("#Crystal2").on("click", game.onCrystal2Click);
    $("#Crystal3").on("click", game.onCrystal3Click);
    $("#Crystal4").on("click", game.onCrystal4Click);
}
,

// 5 OnImageClick() Add the image number to Totalscore
    
onCrystal1Click: function () {
    var numb=parseInt(game.Totalscore) + parseInt(game.Image1Value)
    game.Totalscore=numb
    game.Display(numb)
    console.log(game.Totalscore)

}
,
//image 2
onCrystal2Click: function () {

    var numb=parseInt(game.Totalscore) + parseInt(game.Image2Value)
    game.Totalscore=numb
    game.Display(numb)
    console.log(game.Totalscore)

}
,
//image 3
onCrystal3Click: function () {

    var numb=parseInt(game.Totalscore) + parseInt(game.Image3Value)
    game.Totalscore=numb
    game.Display(numb)
    console.log(game.Totalscore)
}
,
//image 4
onCrystal4Click: function () {

    var numb=parseInt(game.Totalscore) + parseInt(game.Image4Value)
    game.Totalscore=numb
    game.Display(numb)
    console.log(game.Totalscore)
}
,

Display_Init: function (value_number) {

    $("#Number").text(value_number)
}
,

Display: function (value) {

    $("#Total_score").text(value)
    game.Check_score()
}
,
Update_score: function () {

    $("#Win").text("Win : "+game.Win)
    $("#Loses").text("Loses : "+game.Loses)
    // console.log("Loses"+game.Loses)
    // console.log("Win"+game.Win)
}
,

// 6 Logic:
    // If Totalscore> Number function Lose() random()
    // If Totalscore== Number function Win()
    // 7 Lose function update Lose html
    // 8 Win function update Win html
Check_score: function () {
    
    if (game.Totalscore>game.Number)
    {
    game.Loses++
    game.Update_score()
    game.Totalscore=0
    this.Display(game.Totalscore)
    alert("You Lost")
    game.Suffle_Number()
    game.setupEventHandlers()
    
    }

    if (game.Totalscore==game.Number)
    {
    game.Win++
    game.Update_score()
    game.Totalscore=0
    this.Display(game.Totalscore)
    alert("You Won")
    game.Suffle_Number()
    game.setupEventHandlers()
    }
    
}
,

}

$(document).ready(function() {
    game.initializeGame()
    game.Suffle_Number()
    game.setupEventHandlers()
});

