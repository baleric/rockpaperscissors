//quick test function for localhost
function _test(theTest){
	if (document.domain == "localhost"){
		console.log(theTest)	
	}	
}

// main config
require.config({
	waitSeconds: 20,
	//lets stop the caching
	urlArgs: "random=" + Math.random(),
	baseUrl: "/js/",
	paths: {
		"jquery": "libs/jquery-3.1.1"
	}
});

//Get the controller dynamically
var controller = document.getElementById('body').getAttribute('data-controller');
_test('controller = ' + (controller.length > 0));

// Load the controller
if (controller) {
	require(['controllers/' + controller], function (c) {
		c.init();
	});
}

