//import additional scripts
define(["jquery"] , function ($) {

    function init() {
        //make sure the init function is established
        _test($('body').data('controller') + "init = true");
    }        

    return {
        //set public functions
        init: init
    }

});
