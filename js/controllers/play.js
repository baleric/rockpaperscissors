//import additional scripts
define(["jquery"] , function ($) {

//start a timer to ensure user picks a move
    //get the current win streak and deduct it from the timer making it harder for user.

//get the click event for players move.
    //store players move temp to compare to computer
    //add to array to determine ratios of play

//random choose computers move
    //use existing array of moves as a guide for the randomness

//compare results and see who wins...
    //add results to score board


    //init function for page
    function init() {
        //make sure the init function is established
        _test($('body').data('controller') + "init = true");

        initBindings();
    }        

    //establish page bindings and events.
    function initBindings() {
    }    

    //keep play timer in motion.
    function playTimer(){

    }

    //random choose computers move
    function computersMove(){

    }

    //pass the players move here to establish logic
    function playersMove(){

    }


    return {
        //set public functions
        init: init
    }

});
