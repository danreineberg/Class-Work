$(document).ready(function(){

    $("#next").on("click",nextImage);
    $("#previous").on("click",previousImage);
});

var images = ["images/image1.jpg"
, "images/image2.jpg", 
"images/image_final.jpg"];

var i=0

function previousImage(){
	  // if i is not 0 
    if (i > 0){

        // then decrease i by 1
        i--;

    // else then i is 0
    } else {

        // so set i to the last place in the array
        i = images.length-1;
    }

    // change image to new i
    changeImage(i);
}

function nextImage(){
}

function changeImage(arrayPosition){
    $("#carousel").attr("src",images[arrayPosition]);

}
}

