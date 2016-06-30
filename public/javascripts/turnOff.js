function TurnOff(){
	window.location.pathname = "/off";
}

$(document).ready(function(){
	$('#turnOff').click(function(){
		TurnOff();
	});
});