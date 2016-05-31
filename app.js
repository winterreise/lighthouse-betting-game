/* globals $ */

(function() {
  'use strict';

  var bankroll = 100;

  function takeBet() {
    var userBet = Number($('#Bet').val());
    if (isNaN(userBet) || userBet > bankroll || userBet < 5 || userBet > 10) {
      throw new Error('Bet must be a number between 5 and 10.');
    } else {
      return userBet;
    }
  }

  function takeGuess() {
    var userGuess = Number($('#Guess').val());
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
      throw new Error('Guess must be a number between 0 and 10');
    } else {
      return userGuess;
    }
  }

  function processBet(num, userBet, userGuess) {
    var diff = Math.abs(num - userGuess);
    if (diff === 0) {
      bankroll += userBet;
    } else if (diff > 1) {
      bankroll -= userBet;
    }
  }

  function checkGameOver() {
    if (bankroll <= 0) {
      $('input').attr('disabled', true); // set form to disabled, disabling all inputs and buttons inside
      $('#Message').html('Game over!').removeClass('hidden');
    }
  }

  function generateNumber() {
    return Math.round(Math.random()*10);
  }

  $(document).ready(function() {
    $('#Balance').html(bankroll);

    $('#Game').submit(function(event) {
      $('#Message').addClass('hidden');
      event.preventDefault();
      try {
        var num = generateNumber();
        var userBet = takeBet();
        var userGuess = takeGuess();
        processBet(num, userBet, userGuess);
        $('#Balance').html(bankroll);
        checkGameOver();
      } catch (err) {
        $('#Message').html(err.message).removeClass('hidden');
      }
    });
  });
})();
