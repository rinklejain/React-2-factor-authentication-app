var sid = require('shortid');

export function verifyNumber(number = '') {
	return new Promise((resolve, reject) => {
		let exists = localStorage.getItem(number);
		if(exists == null)
			resolve(number);
		else
			reject("Number already exists");

	})
}

export function sendOTP(number = '') {
	return new Promise((resolve, reject) => {
		var otp = sid.generate();
		if(true)
			resolve(otp);
		else
			reject("Error: OTP not sent to " + number);
	})
}