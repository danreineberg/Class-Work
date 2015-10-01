var result;

// Step 1: On click of compare, get value of input A and input B
$("#submit").click(compareNumbers);

// Step 2: Compare numbers;

function compareNumbers(){

	// get valeue of a and b

	var inputA = $("#a").val();
	var inputB = $("#b").val();

	//Convert input a and input b to numbers
	inputA = parseInt(inputA);
	inputB = parseInt (inputB);

	// if a > b then set comparison to >
	if (inputA > inputB) {
		result = ">";
	}

	// if a < b then set comparison to <
	if (inputA < inputB) {
		result = "<";
	}

	// if a = b then set comparison to =
	if (inputA === inputB) {
		result = "=";
	}

// Step 5: Update span "comparison" with result
	$("#comparison").text(result);

}

