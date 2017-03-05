var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i=0; i <squares.length; i++) {
	//add initial color to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		} else {
			this.style.background = "#232312";
			messageDisplay.textContent= "Try Again";
		}


	});

};

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change eache color to match given color
		squares[i].style.background = color;
	}	
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}