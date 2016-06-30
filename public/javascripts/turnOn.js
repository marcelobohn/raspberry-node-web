function TurnOn(){
	window.location.pathname = "/on";
}

$(document).ready(function(){
	$('#turnOn').click(function(){
		TurnOn();
	});
});