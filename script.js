'use strict';

/*
console.log(document.querySelector('.message')); 
document.querySelector('.message').textContent = 'Yay correct number!!';
document.querySelector('.number').textContent = 11;
document.querySelector('.score').textContent = 23;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); 
*/


document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if(!guess) {
    document.querySelector('.message').textContent = 'No Number!!';
  }
});



