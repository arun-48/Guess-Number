'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
// console.log(secretNumber);
let score = 20;
let highScore = 0;

//Display Message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let value = Number(document.querySelector('.guess').value);
  console.log(secretNumber);
  console.log(value);

  //If no value
  if (!value) {
    // document.querySelector('.message').textContent='⛔ No Number';
    displayMessage('⛔ No Number');

    //When Guess Correct
  } else if (value === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // document.querySelector('.message').textContent=`🏆 You are Correct`;
    displayMessage(`🏆 You are Correct`);

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (value !== secretNumber) {
    if (score >= 1) {
      // document.querySelector('.message').textContent =
      // value < secretNumber ? `📉 It's Low...` : `📈 It's High...`;
      displayMessage(
        value < secretNumber ? `📉 It's Low...` : `📈 It's High...`
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent='💥 You lost the game...';
      displayMessage('💥 You lost the game...');
    }
  }
});
//Again Button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  score = 20;

  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});

// Mostly the code below same except too high and low messgae so we Restructured

//   } else if (value < secretNumber) {
//   //When the value is low
//   if (score >= 1) {
//     document.querySelector('.message').textContent = `📉 It's Low...`;
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent =
//     '💥 You lost the game...';

//     //When the value is High
//   }
// } else if (value > secretNumber) {
//   if (score >= 1) {
//     document.querySelector('.message').textContent = `📈 It's High...`;
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent =
//       '💥 You lost the game...';
//   }
// }

//Another Refactor
//Is There are many with same code like this
//  document.querySelector('.message').textContent
//Instead of using it again and again use it in a functin
