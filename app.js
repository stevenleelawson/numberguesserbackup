var minMaxButton = document.getElementById('min-max-button');
var clearButton = document.querySelector('#clear-button');
var guessButton = document.querySelector('#guess-button');
var resetButton = document.querySelector('#reset-button');
var mainInput = document.querySelector('#main-input');
var displayNumber = document.querySelector('.display-number');
var highLow = document.querySelector('.high-low');
var rangeButton = document.getElementById('range-button');
var minNum = document.getElementById('min-num').value;
var maxNum = document.getElementById('max-num').value;

function dynNum(){
  minNum = Math.ceil(minNum)
  maxNum = Math.floor(maxNum)
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}
var randomNum = dynNum();

rangeButton.addEventListener('click', function(event){
  event.preventDefault();
  minNum = document.getElementById('min-num').value;
  maxNum = document.getElementById('max-num').value;
  randomNum = dynNum();

})
function clearAgain(){
  mainInput.addEventListener('keyup', function(){
    clearButton.disabled = false;
    resetButton.disabled = false;
    });
}
clearAgain();

clearButton.addEventListener('click',function(event){
    clearAgain();
    event.preventDefault();
    var userGuess = mainInput.value;
    var usingGuess = parseInt(userGuess);
    form.reset();
    displayNumber.innerText = "?";
    clearButton.disabled = true;
  });

resetButton.addEventListener('click', function(event){
  event.preventDefault();
  form.reset();
  clearAgain();
  minNum.innerText = 0;
  maxNum.innerText = 100;
  displayNumber.innerText = "?";
  highLow.innerText = "Please enter a number";
  resetButton.disabled = true;
})
guessButton.addEventListener('click', function(event){
  var userGuess = mainInput.value;
  var usingGuess = parseInt(userGuess);
  event.preventDefault();
  displayNumber.innerText = usingGuess;
  display(usingGuess);
  appending();

console.log(minNum);
console.log(maxNum);

})
function display(){
  var userGuess = mainInput.value;
  var usingGuess = parseInt(userGuess);
  if (usingGuess < randomNum){
    highLow.innerText = "Your Guess is too Low.";
  } else if (usingGuess > randomNum){
    highLow.innerText = "Your Guess is too High.";
  } else if (usingGuess === randomNum){
    highLow.innerText = "BOOM SHAKALA BOOM";
  }
}
function appending (){
  var userGuess = mainInput.value;
  var usingGuess = parseInt(userGuess);
  if (isNaN(usingGuess)){
    displayNumber.innerText = "?";
    highLow.innerText = "Enter an actual number, bitte";
  } else if (usingGuess < 1 || usingGuess > 100){
    highLow.innerText = "Please enter a number in the given range";
  }
}
function increaseDecrease () {
  var userGuess = mainInput.value;
  var usingGuess = parseInt(userGuess);
  if (usingGuess === randomNum){
    minNum = minNum - 10;
    maxNum = maxNum + 10;
    randomNum = randomNum > minNum && randomNum < maxNum;
    console.log(randomNum)
  } else if (usingGuess !== randomNum){
    minNum = minNum + 10;
    maxNum = maxNum - 10;
    randomNum = randomNum > minNum && randomNum < maxNum;
  }
}
