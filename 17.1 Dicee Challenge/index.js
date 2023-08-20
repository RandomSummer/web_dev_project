// first image section 
// first random number 
var randomnumber1 = Math.floor( Math.random() * 6 ) + 1;

var randomDiceImage = "dice" + randomnumber1 + ".png";
// first image source  
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// second image section 
// second random number 
var randomnumber2 = Math.floor( Math.random() * 6 ) + 1;

var randomImageSource2 = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// conditional section 
if (randomnumber1 > randomnumber2) 
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomnumber2 > randomnumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins1";
}
else
{
    document.querySelector("h1").innerHTML = "Draw1";
}