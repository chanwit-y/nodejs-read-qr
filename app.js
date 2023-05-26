const Jimp = require("jimp");
const fs = require('fs')
const QrCode = require('qrcode-reader');


// Read the image and create a buffer  
// (Here image.png is our QR code)
const buffer = fs.readFileSync(__dirname + '/images/a.png');

// Parse the image  
Jimp.read(buffer, function(err, image) {
	if (err) {
	    console.error(err);
	}
	let qrcode = new qrCode();
	qrcode.callback = function(err, value) {
	    if (err) {
		console.error(err);
	    }
	    console.log(value.result);
	};
	qrcode.decode(image.bitmap);
     });