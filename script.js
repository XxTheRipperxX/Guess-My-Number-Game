'use strict';

let SecretNumber = Math.trunc(Math.random() * 20 + 1); // we defined a random number between 1 and 20
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const geuss = Number(document.querySelector('.guess').value);
  console.log(geuss, typeof geuss);

  if (!geuss /*(or guess == 0)*/) {
    document.querySelector('.message').textContent = 'No number ❌⛔';

    // when player wins
  } else if (geuss === SecretNumber) {
    displayMessage('🎉Correct Number');
    displayNumber(SecretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '300px';
  } else if (geuss !== SecretNumber) {
    if (score > 1) {
      displayMessage(geuss > SecretNumber ? 'too high !' : 'too low !');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost❌');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = 'rgb(255, 1, 0)';
    }
  }
});
// Again button restore the initial values
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'RGB(34, 34, 34)';
  document.querySelector('.number').style.width = '15rem';
});
