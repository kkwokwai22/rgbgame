var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square"); 
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init(); 

function init() {
	// mode buttons event listners 
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {	
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			if (this.textContent === "Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			reset();
			//figure out how many squares to show
			//pick new colors
			//pick a new pickedColor
			//update page to reflect changes
		});
  	}
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			// compare color to pickedColor 
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				} else {
			 	this.style.background = "#232323";
			 	messageDisplay.textContent = "Try again!";
			}		
		});
	}
}



function reset() {
	colors = generateRandomColors(numSquares);
	// pick a new reandom color from array 
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	// change colors of squares 
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";		
		}
	}
	h1.style.background = "steelblue";
}

// Add and remove the selected(style) 
/* easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i= 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i= 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});
*/


resetButton.addEventListener("click" , function(){
	reset();
});


function changeColors(color) {
	// loop through all squares
	// change each color to match given color 
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num) {
	// make an array 
	var arr = [];
	// repeat num times
	// add num random colors to arr
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())// get random color and push into arr
	}
	// return that array 
	return arr;
}

function randomColor() {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}







