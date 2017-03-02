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

    var counter;
    //set the start of the array so computer equally chooses existing moveset.
    var playerArray = ['rock','paper','scissors'];
    //set the start of the array so computer is equal to the user array count..
    var computerArray = ['rock','paper','scissors'];
    //set the rules for the paper rock scissors game (opposites)
    var gameLogic = {rock: "scissors", paper: "rock", scissors: "paper"}; 

    //init function for page
    function init() {
        //make sure the init function is established
        _test($('body').data('controller') + "init = true");


        initBindings();
        playTimer();
    }        

    //establish page bindings and events.
    function initBindings() {
        $(document).on('click','.player-move:not(".unselected,.selected")',function(){

            $(this).addClass('selected');
            //pass move to players to process
            playersMove($(this).data('move'));
            //reset timer
            playTimer(false);
        });
    }    

    //keep play timer in motion.
    function playTimer(stopTime){
        
        //start time
        var startcount = 10;
        //init the counter
        clearInterval(counter)
        //set the count down interval
        $('.game-timer').text(startcount)

        if (stopTime !== false) {
            counter = setInterval(function(){
                
                //check if 0 and lose.
                if (startcount != 0) {
                    startcount -= 1;
                    $('.game-timer').text(startcount)
                } else {
                    //confirm loss occurs
                    _test('counter = 0 ' + (startcount == 0));
                    $('.game-timer').html('<span class="time-up">Times Up, <strong>You Lost :( </strong></span>')
                    clearInterval(counter);
                }
            },1000);
        }

    }

    //random choose computers move
    function computersMove(playerMove){  
        //selet a random array value based on previous moves
        var randomValue = Math.floor((Math.random() * playerArray.length));
        _test('players history move = ' + playerArray[randomValue])
        
        //use the gamelogc variable to reverse the value of the random user selection
        var computerMove = gameLogic[playerArray[randomValue]]

        computerArray.push(computerMove)      
        _test('computer history = ' + computerArray.toString());

        $('.computer-move[data-move="'+computerMove+'"]').addClass('selected')

        results(playerMove,computerMove)
       
    }

    //pass the players move here to establish logic
    function playersMove(playerMove){

        playerArray.push(playerMove)      
        _test('player history = ' + playerArray.toString())  

        computersMove(playerMove);
    }

    //do results
    function results(playerMove,computerMove){
        
        _test('Player =' + playerMove);
        _test('Computer =' + computerMove);

        var winner = "?";

        var compSelected = $('.computer-move.selected');
        var playSelected = $('.player-move.selected');

        //determine draw to stop other logic.        
        if (playerMove === computerMove) {
            winner = "draw";
            compSelected.addClass('win');
            playSelected.addClass('win');
        } else {

            if (computerMove === gameLogic[playerMove]){
                winner = "player"
                compSelected.addClass('loss');
                playSelected.addClass('win');
            } else {
                winner = "computer"
                compSelected.addClass('win');
                playSelected.addClass('loss');
            }
        }

        $('.computer-move:not(".selected"), .player-move:not(".selected")').addClass('unselected')
        
    }


    return {
        //set public functions
        init: init
    }

});
