//import additional scripts
define(["jquery"] , function ($) {

    //do Counter
    var counter;
    //set the start of the array so computer equally chooses existing moveset.
    var playerArray = ['rock','paper','scissors'];
    //set the start of the array so computer is equal to the user array count..
    var computerArray = ['rock','paper','scissors'];
    //set the rules for the paper rock scissors game (opposites)
    var gameLogic = {rock: "scissors", paper: "rock", scissors: "paper"};
    var computerLogic = {rock: "paper", paper: "scissors", scissors: "rock"};
    //round #
    var roundNumber = 0;
    

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

            if (!$('.widget').hasClass('over')) {
                //select your move
                $(this).addClass('selected');
                //pass move to players to process
                playersMove($(this).data('move'));
                //reset timer
                playTimer(false);
                //remove help
                $('.select-move').fadeOut(100,function(){
                    $(this).remove();
                })
            }


        });
    }    

    //keep play timer in motion.
    function playTimer(stopTime){
        
        //get the playerstreak
        var playerstreak = parseInt($('.player-table .streak').text());
        _test("player streak = "+ playerstreak)
        
        //start time and deduct playerstreak so it gets harder with less time to move.
        var startcount = 10 - playerstreak
        //if the streak is above 7, we should hard code 3 seconds remaining to allow a move to take place.
        if (playerstreak > 7) {
            //set to 3 seconds.
            startcount = 3;
        }
        
        //clear the counter, so we can start it again.
        clearInterval(counter)
        //set the count down interval
        $('.game-timer').text(startcount)

        //if stoptime is false, then round is over.
        if (stopTime !== false) {
            //get the 1 second countdown interval going.
            counter = setInterval(function(){
                //check if counter runs out (0) and player loses.
                if (startcount != 0) {
                    //remove 1 second from counter
                    startcount -= 1;
                    //append the current time tot he counter.
                    $('.game-timer').text(startcount)
                } else {
                    //confirm loss occurs
                    _test('counter = 0 ' + (startcount == 0));
                    //display loss text
                    $('.game-timer').html('<span class="time-up">Times Up, <strong>You Lost :( </strong></span>');
                    //pass some dummy moves.
                    results('scissors','rock');
                    //clear the interval as the game is over
                    clearInterval(counter);
                }
            //1000 is the interval, 1000 = 1 second.
            },1000);
        }

    }

    //random choose computers move
    function computersMove(playerMove){  

        _test('before shuffle : ' + playerArray)
        //shuffle the array of previous moves.
        playerArray = shuffler(playerArray);
        console.log('after shuffle : ' + playerArray)

        //selet a random array value based on previous moves
        var randomValue = Math.floor((Math.random() * playerArray.length));
        _test('players history move = ' + playerArray[randomValue])
        
        //use the gamelogc variable to reverse the value of the random user selection
        var computerMove = computerLogic[playerArray[randomValue]]
        //push computers move into it's own array.
        computerArray.push(computerMove)      
        _test('computer history = ' + computerArray.toString());

        //find the element on the DOM and add a selected class for visual effects.
        $('.computer-move[data-move="'+computerMove+'"]').addClass('selected')

        //pass restults to calculate.
        results(playerMove,computerMove)
       
    }

    //pass the players move here to establish logic
    function playersMove(playerMove){
        //push players move into array so we can guess based on ratios.
        playerArray.push(playerMove)      
        _test('player history = ' + playerArray.toString());
        //lets get the computer to make its move baed on previous moves.
        computersMove(playerMove);
    }

    //do results
    function results(playerMove,computerMove){        

        //this function will manipulate the dom and use game logic to determine a winner.
        _test('Player =' + playerMove);
        _test('Computer =' + computerMove);

        //winner text declaration.
        var winner = "";

        //grab the element from the DOM for re-use and time saving
        var compSelected = $('.computer-move.selected');
        var playSelected = $('.player-move.selected');

        //grab the results table ready to append results.
        var playertable = $('.player-table')
        var computertable = $('.computer-table')

        //determine draw to stop other logic processing.        
        if (playerMove === computerMove) {
            //change the winner text.
            winner = "It's a Draw!";
            //show colors on move selected
            compSelected.addClass('win');
            playSelected.addClass('win');

            //append td with results
            playertable.append('<td class="win '+playerMove+'"></td>')
            computertable.append('<td class="win '+computerMove+'"></td>')
        } else {

            //check if the computers move is 1:1 equal with the game rules
            //if so you win :)
            if (computerMove === gameLogic[playerMove]){
                //change the winner text.
                winner = "You Win!"

                //add to the win count and strak count of the player
                playertable.find('.streak').text(parseInt(playertable.find('.streak').text()) + 1)
                playertable.find('.count').text(parseInt(playertable.find('.count').text()) + 1)

                //set the computers streak to 0 if loss occurs.
                computertable.find('.streak').text('0')

                //show colors on move selected
                compSelected.addClass('loss');
                playSelected.addClass('win');
                
                //append td with results and color code win and loss.
                playertable.find('.count').after('<td class="win '+playerMove+'"></td>')
                computertable.find('.count').after('<td class="loss '+computerMove+'"></td>')

            } else {

                //check if element exists and reasoning for losing.
                if ($('.game-timer .time-up').length > 0 ) {
                    //let the user know if the times up
                    winner = "Times Up... You Lose!"    
                } else {
                    //change the winner text.
                    winner = "You Lose!"
                }                
                
                //add to the win streak and count of the computers information.
                computertable.find('.streak').text(parseInt(computertable.find('.streak').text()) + 1)
                computertable.find('.count').text(parseInt(computertable.find('.count').text()) + 1)
                
                //reset winstreak for player
                playertable.find('.streak').text('0')

                //show colors on move selected
                compSelected.addClass('win');
                playSelected.addClass('loss');

                //append td with results and color code win and loss.
                playertable.find('.count').after('<td class="loss '+playerMove+'"></td>');
                computertable.find('.count').after('<td class="win '+computerMove+'"></td>');
            }
        }

        //fade the table in after first round.
        if (roundNumber === 0) {
            $('.results-table').fadeIn();
        }

        //incremenet round number.
        roundNumber++
        //append round number to table header.
        $('.results-table .headers .wins').after('<th> #'+(roundNumber)+'</th>')

        //add fade out class to unselected items for visual effect
        $('.computer-move:not(".selected"), .player-move:not(".selected")').addClass('unselected');
        //change the in message dynamically and show
        $('.winner').hide().find('span').html('<h3 class="win-message">'+winner+'</h3>').parent().fadeIn();

        //add a class to the widget to keep the state of play being over.
        //this will stop additional clicks on the move icons.
        $('.widget').addClass('over')

        //click event to be laucnhed once on the body element, 
        //this will allow us to click anywhere ONCE to restart the game.
        $('body').one("click", function(e) {
            //reset the ui back to default ready for next round.
            resetUI();
            //stop bubbling and click from firing other events.
            e.preventDefault();
            e.stopPropagation();
        });
    }
    

    function resetUI(){
        //take away visual states from players moves.
        $('.player-move, .computer-move').removeClass('selected loss win unselected');
        //get the playtimer going again when the round restarts.
        playTimer();
        //fadeout the winner text
        $('.winner').fadeOut();
        //remove class from the widget to allow click events again.
        $('.widget').removeClass('over')
    }


    return {
        //set public functions
        init: init
    }

});
