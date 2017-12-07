var minMaxButton = document.getElementById('min-max-button');
var clearButton = document.querySelector('#clear-button');
var clearClicked = document.getElementsByClassName('used')[0];
var guessButton = document.querySelector('#guess-button');
var resetButton = document.querySelector('#reset-button');
var mainInput = document.querySelector('#main-input');
var displayNumber = document.querySelector('.display-number');
var highLow = document.querySelector('.high-low');
var oneHundred = document.querySelector('.one-hundred');
var fifty = document.querySelector('.fifty');
var twentyFive = document.querySelector('.twenty-five');
var boom = document.getElementById('boom-boom');
var rangeButton = document.getElementById('range-button');
var minNum = document.getElementById('min-num').value;
var maxNum = document.getElementById('max-num').value;

function dynNum(){
  minNum = Math.ceil(minNum)
  maxNum = Math.floor(maxNum)
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}
var randomNum = dynNum();
console.log(randomNum)

rangeButton.addEventListener('click', function(event){
  event.preventDefault();
  minNum = document.getElementById('min-num').value;
  maxNum = document.getElementById('max-num').value;
  randomNum = dynNum();

})

  mainInput.addEventListener('keyup', function(){
    clearButton.disabled = false;
    resetButton.disabled = false;
    });

clearButton.addEventListener('click',function(event){
    event.preventDefault();
    var userGuess = mainInput.value;
    var usingGuess = parseInt(userGuess);
    form.reset();
    displayNumber.innerText = "?";
  });

resetButton.addEventListener('click', function(event){
  event.preventDefault();
  form.reset();
  displayNumber.innerText = "?";
  highLow.innerText = "Please enter a number";
  randomNum = fiftyRandomNum;
  mainInput.addEventListener('keyup', function(){
    clearButton.disabled = false;
    resetButton.disabled = false;
    });
})
guessButton.addEventListener('click', function(event){
  event.preventDefault();
  var userGuess = mainInput.value;
  var usingGuess = parseInt(userGuess);
  displayNumber.innerText = usingGuess;

  if (usingGuess < randomNum){
    var userGuess = mainInput.value;
    var usingGuess = parseInt(userGuess);
    highLow.innerText = "Your Guess is too Low.";
  } else if (usingGuess > randomNum){
    highLow.innerText = "Your Guess is too High.";
  } else if (usingGuess === randomNum){
    highLow.innerText = "BOOM SHAKALA BOOM";
    boom.style.hidden = false;
    randomNum = newRandomNum;
  }

  if (isNaN(usingGuess)){
    displayNumber.innerText = "?";
    highLow.innerText = "Enter an actual number, bitte";
  } else if (usingGuess < 1 || usingGuess > 100){
    highLow.innerText = "Please enter a number in the given range";
  }
})
