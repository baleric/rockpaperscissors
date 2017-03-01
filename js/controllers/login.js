//import additional scripts
define(["jquery"] , function ($) {

    function init() {
        _test($('body').data('controller') + "init = true");
    }        

    return {
        //set public functions
        init: init
    }

});
