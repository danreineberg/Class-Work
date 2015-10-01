// Step 1: Create variable to keep track of result.
var result = 0;


// Step 2: On click of 0 button add 0 to result. Show new result.
$("#zero").click(addZero);

// Step 3: On click of +5 button add 5 to result. Show new result.
$("#add5").click(addFive);

// Step 4: On click of +10 button add 10 to result. Show new result.
$("#add10").click(addTen);

// Step 5: On click of -1 button subtract 1 to result. Show new result.
$("#sub1").click(subtractOne); 


// Simple Function.

// function updateResult(newNum){
// 	result = result + newNum;

// 	$("result").text(result);
// }


function addZero() {
	result = result + 0;

	$("#result").text(result);
}

function addFive() {
	result = result + 5;

	$("#result").text(result);
}

function addTen() {
	result = result + 10;

	$("#result").text(result);
}

function subtractOne() {
	result = result - 1;

	$("#result").text(result);
}