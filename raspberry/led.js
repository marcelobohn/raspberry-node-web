var wpi = require('wiring-pi');

module.exports = {
	changeLed : function(status) {
		var configPin = 7;

		wpi.setup('wpi');
		wpi.pinMode(configPin, wpi.OUTPUT);

		var isLedOn = status;
		wpi.digitalWrite(configPin, isLedOn );
	}
};
