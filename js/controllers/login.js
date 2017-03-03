//import additional scripts
define(["jquery"] , function ($) {

    function init() {
        //make sure the init function is established
        _test($('body').data('controller') + "init = true");

        //binding for the page.
        initBindings();
    }        

    function initBindings(){
    	//bind login button to simple validation
    	$(document).on('click','.login-btn',function(e){

    		//assign button to varible to maintain scope.
    		var _this = $(this);

    		//declare error count
    		var errorCount = 0;

    		//cycle opver inputs and check for anything    		
    		$('input').each(function(){
    			//get the value and check if empty
    			if ($(this).val() == "") {
    				//indicate issue with input
    				$(this).css('border-color','red');
    				//increase error count
    				errorCount++
    			} else {
    				//indicate green happy times.
    				$(this).css('border-color','green');
    			}
    		})

    		_test(errorCount)

    		//check error count and proceed to validate
    		if (errorCount === 0) {
    			//keep event of button and return true.
    			return true;
    		} else {

    			//change the color of the button to red and tell us how many errors.
    			_this.addClass('btn-error').text('Errors : ' + errorCount);

    			//change the text back after 2 seconds.
    			setTimeout(function(){
    				//set button to default state
    				_this.removeClass('btn-error').text('Login');
    			},2000);

    			//stop the buttons default action of submitting the form.
    			return false;
    		}

    		
    	});
    }

    return {
        //set public functions
        init: init
    }

});
