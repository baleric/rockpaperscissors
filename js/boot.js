//quick test function for localhost, saves removing console logs from production
function _test(theTest){
	if (document.domain == "localhost"){
		console.log(theTest)	
	}	
}

//array shuffler - Fisher yates algorithm - looked up some algorithms after you mentioned it :)
function shuffler(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// main config for requirejs
require.config({
	waitSeconds: 20,
	//lets stop the caching
	urlArgs: "random=" + Math.random(),
	baseUrl: "/js/",
	paths: {
		"jquery": "libs/jquery-3.1.1"
	}
});

//Get the controller dynamically form body element
var controller = document.getElementById('body').getAttribute('data-controller');
_test('controller = ' + (controller.length > 0));

// Load the controller
if (controller) {
	require(['controllers/' + controller], function (c) {
		//launch init function inside the page controller.
		c.init();
	});
}

