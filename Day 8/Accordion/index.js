$(document).ready(function(){

$(".accordion-box ul").hide();

function hideOthers(){
		$("ul").hide();
	};

$("#box1").click(function(){
	hideOthers();
	$("#box1 ul").toggle();
	});

$("#box2").click(function(){
	hideOthers();
	$("#box2 ul").toggle();
	});

$("#box3").click(function(){
	hideOthers();
	$("#box3 ul").toggle();
	});
})