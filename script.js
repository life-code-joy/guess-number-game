'use strict';

/*
console.log(document.querySelector('.message')); 
document.querySelector('.message').textContent = 'Yay correct number!!';
document.querySelector('.number').textContent = 11;
document.querySelector('.score').textContent = 23;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); 
*/

let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);


  //PLAY AGAIN
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc((Math.random() * 20) + 1);
    document.querySelector('.message').textContent = 'Start Guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

  });




  //WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!';

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😁 Yay correct number!!';
    document.querySelector('.number').textContent = secretNumber;
    //change screen BGC
    document.querySelector('body').style.backgroundColor = '#60b347';
    //change the number width
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


    //WEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 🛩 Too high'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = " 😛 You lost the game. 🖕 Try again!"
      document.querySelector('.score').textContent = 0;
    }

    //IF GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' ⏚ Too low'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = " 😛 You lost🖕 Try again!"
      document.querySelector('.score').textContent = 0;
    }
  }
});




console.log(secretNumber);