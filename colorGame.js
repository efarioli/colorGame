var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}

	}
});
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	
	}
	
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for (var  i=0; i<squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232312"
});

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
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
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
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into an array
		arr.push(randomColor());


	}
	return arr;

}

function randomColor() {
	//pick a red ftom 0-255
	var r =Math.floor(Math.random()*256);
	//pick a green ftom 0-255
	var g =Math.floor(Math.random()*256);
	//pick a blue ftom 0-255
	var b =Math.floor(Math.random()*256);
	return "rgb(" + r + ", "+ g + ", "+ b + ")";

}
