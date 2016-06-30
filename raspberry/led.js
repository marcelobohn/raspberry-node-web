function Foo(bar) {
	this.wpi = require('wiring-pi');
}

Foo.prototype.ledOn = function(status) {
	var configPin = 7;

	wpi.setup('wpi');
	wpi.pinMode(configPin, wpi.OUTPUT);

	var isLedOn = status;
	wpi.digitalWrite(configPin, isLedOn );
};

