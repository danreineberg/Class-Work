var entry;
var currency;


// Store the running total of the register. 
var total = 0;

//User submits an amount via function 
$('#entry').submit(function(e) {

	// stop form from submitting
	e.preventDefault();


	//Get input value
	entry = $("#newEntry").val();

	//Change entry from strint to int
	entry = parseFloat(entry);

	// run enter function
	enter(entry);



});

//function reads the users input

function enter(entry) {

	//user input is read
	

	//Add line item
	$("#entries").append("<tr><td></td><td></td></tr>");

	total = total + entry;

	console.log(total);
}







  
  
  
  
 