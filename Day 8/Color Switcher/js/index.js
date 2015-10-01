// document.getElementById('grayButton').onclick = switchGray;

$("#grayButton").click(function(){
	switchGray();
})

// document.getElementById('whiteButton').onclick = switchWhite;

$("#whiteButton").click(function(){
	switchWhite();
})

function switchGray() {
	$("body").css("background-color", "gray")
	 // document.body.style.backgroundColor = 'gray';
	$("body").css("color", "white")
 	 // document.body.style.color = 'white';
}

function switchWhite() {
	$("body").css("background-color", "white")
	 // document.body.style.backgroundColor = 'white';
	$("body").css("color", "grey")
 	 // document.body.style.color = 'black';
}
