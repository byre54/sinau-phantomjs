var page = require('webpage').create();
page.open('http://kaskus.co.id', function(status) {
	console.log('status = '+status);
	if (status === "success") {
		page.render('example.pdf');
	}
	phantom.exit();
});