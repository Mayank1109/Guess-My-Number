'use strict';

var secretNumber = Math.trunc(Math.random() * 20) + 1;
var highscore = 0;
let Score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#4a8d36';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (Score > highscore) {
      highscore = Score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (Score > 1) {
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      document.querySelector('.message').textContent = 'You Lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = Score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = 'rgb(79, 131, 133)';
  document.querySelector('.number').style.width = '15rem';
});
