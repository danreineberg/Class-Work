$(document).ready(function(){

	$("form").on("submit", function(e){
	e.preventDefault();
	var firstname = $("input[name='firstname']").val();
	var lastname = $("input[name='lastname']").val();
	var areacode = $("input[name='areacode'] ").val();
	var three = $("input[name='three'] ").val();
	var four = $("input[name='four'] ").val();
	var address1= $("input[name='address1'] ").val();
	var address2 = $("input[name='address2'] ").val();
	var city = $("input[name='city'] ").val();
	var state = $("input[name='state'] ").val();
	var zip = $("input[name='zip'] ").val();
	var course = $("select[name='course'] ").val();
	var experience = $("input[name='pastexperience'] ").val();
	var referral = $("select[name='referral'] ").val();
	var comments = $("input[name='comments'] ").val();

	var data = {
		userFirstName: firstname, 
		userLastName: lastname, 
		userPhone: [areacode, three, four], 
		userAddress: [address1, address2],
		userCity: city,
		userState: state,
		userZip: zip,
		userCourse: course,
		userExperience: experience,
		userReferral: referral,
		userComments: comments,

	};

	$("form").validate(){
		rules:{
			firstname: "required",
			lastname: "required"
		},
		messages: {
			firstname: "Please specify your name"
		}	
	}

	

	

	console.log(data);
	});
})
