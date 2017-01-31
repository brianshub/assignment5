$(document).ready( function(){

$("#submit-btn").click(changePics);

function changePics(){
	event.preventDefault();
	var city = $("#city-type").val();
	city = city.toLowerCase();
	$("#city-type").val("");
	if (city == "nyc" || city == "new york city" || city == "new york"){
		$("body").attr("class", "nyc");
	}
	else if (city == "san francisco" || city == "sf" || city == "bay area"){
		$("body").attr("class", "sf");
	}
	else if (city == "los angeles" || city == "la" || city == "lax"){
		$("body").attr("class", "la");
	}
	else if (city == "austin" || city == "atx"){
		$("body").attr("class", "austin");
	}
	else if (city == "sydney" || city == "syd"){
		$("body").attr("class", "sydney");
	}
	else{
		$("body").attr("class", "city-pix")
		alert("We currently don't have images for this city. Check back later!");
		
	}
	
}

});