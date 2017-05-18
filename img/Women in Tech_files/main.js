$(document).ready(function () {
	
//Navigation slide	
	$(".menu-container").click(function () {
		$("nav").slideToggle();
	});

//ANIMATED BURGER MENU
	function myFunction(x) {
		x.classList.toggle("change");
	}

//Button press shadow
	$("#start-button").mousedown(function () {
		$(this).css("background-color", "#999");
	});
	$("#start-button").mouseup(function () {
		$(this).css("background-color", "#ccc");
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});