
// [
// 	"rgb(255, 0, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 255)"
// ]
var numberOfSqr=6;
var colors=getrandomColors(numberOfSqr);

var squares=document.querySelectorAll(".d");
var pickedColor=pickColor();
var display=document.getElementById("h");
var message=document.getElementById("s2");
var h1=document.querySelector("h1");
var resetbtn=document.querySelector("#reset");
var easyBtn=document.querySelector("#ebtn");
var hardBtn=document.querySelector("#hbtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSqr=3
	colors=getrandomColors(numberOfSqr);
	pickedColor=pickColor();
	display.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}

});

hardBtn.addEventListener("click", function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		numberOfSqr=6;
		colors=getrandomColors(numberOfSqr);
	pickedColor=pickColor();
	display.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}
	
});

resetbtn.addEventListener("click", function(){
	colors=getrandomColors(numberOfSqr);
	pickedColor=pickColor();
	display.textContent=pickedColor;
	this.textContent="New Colors"
	message.textContent=" ";
	for (var i = 0; i< squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
}

	h1.style.backgroundColor="steelblue";

})

display.textContent=pickedColor;

for (var i = 0; i< squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if(clickedColor===pickedColor){
		message.textContent="correct";
		resetbtn.textContent="Play Again?"
		h1.style.backgroundColor=clickedColor;
		changeColor(clickedColor);

		}else{
			this.style.backgroundColor="#252525";
			message.textContent="Try Again";

		}
	});

}
 
function changeColor(color){
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function getrandomColors(num){

	var arr=[]
	for(var i=0;i<num;i++){
		arr.push(randomColors())
	}
	return arr;
}

function randomColors(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}