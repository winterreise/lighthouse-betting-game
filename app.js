(function() {
  'use strict';

  var bankroll = 100;

  function takeBet() {
    var userBet;
    do {
      userBet = Number(prompt('Place a bet between 5 and 10.'));
    } while(isNaN(userBet) || userBet > bankroll || userBet < 5 || userBet > 10);
    return userBet;
  }

  function takeGuess() {
    var userGuess;
    do {
      userGuess = Number(prompt('Place a guess between 0 and 10.'));
    } while(isNaN(userGuess) || userGuess < 0 || userGuess > 10);
    return userGuess;
  }

  function processBet(num, userBet, userGuess) {
    var diff = Math.abs(num - userGuess);
    if (diff === 0) {
      bankroll += userBet;
    } else if (diff > 1) {
      bankroll -= userBet;
    }
  }

  function generateNumber() {
    return Math.round(Math.random()*10);
  }

  while (bankroll > 0) {
    var num = generateNumber();
    var userBet = takeBet();
    var userGuess = takeGuess();
    processBet(num, userBet, userGuess);
    alert('Number was ' + num + '. Bankroll is: ' + bankroll);
  }

  alert('Game over!');

})();
