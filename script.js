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
  //note : usually whenever we get something from the user interface for exemlpe from an input field it usually always is a string  so w
  const geuss = Number(document.querySelector('.guess').value); // el valeur illi bch nda5louh 8adi fil input bch yji as a string donc lezem nconvertih L number bch tsir el compairason mbin howa w el secret number illi na3mloulou generate mb3d(if we want to compare numbers with numbers wz need to first convert this string to a number  )
  console.log(geuss, typeof geuss); // string // it should do the exact same thing as before but we first web stored that value into a variable
  // note : usually in an aplication like this which has an input value from user the first thing to do is to check if there actually is a value and if there is no value well then we can print something to the console as a response

  // when there is no input

  if (!geuss /*(or guess == 0)*/) {
    // if there's no guess then print .... note: whenever i click this button we get "no number" message printed, this works because 0 is falsy value and so "guess"here is false but then we use the NOT operator to convert it to true and like this we can make this block of code execute
    document.querySelector('.message').textContent = 'No number ❌⛔';

    // when player wins
  } else if (geuss === SecretNumber) {
    displayMessage('🎉Correct Number');
    displayNumber(SecretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // here we're selecting the body element to change the background color once if geuss === SecretNumber
    document.querySelector('body').style.backgroundColor = '#60b347';

    // here we're selecting the number class to change the width
    document.querySelector('.number').style.width = '300px';
  } else if (geuss !== SecretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   geuss > SecretNumber ? 'too high !' : 'too low !';
      displayMessage(geuss > SecretNumber ? 'too high !' : 'too low !');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      displayMessage('You lost❌');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = 'rgb(255, 1, 0)';
    }
  }
  //else if (geuss > SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high !';

  //     score--; // score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost ❌⛔';
  //     document.querySelector('body').style.backgroundColor = 'rgb(255, 1, 0)';
  //     document.querySelector('.score').textContent = 0;
  //   }

  // } else if (geuss < SecretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low !';

  //     score--; // score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost ❌⛔';
  //     document.querySelector('body').style.backgroundColor = 'rgb(255, 1, 0)';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
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
