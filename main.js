var inputSubmit1 = document.querySelector(".input-submit1");
var inputSubmit2 = document.querySelector(".input-submit2");
var inputSubmit3 = document.querySelector(".input-submit3");
var inputSubmit4 = document.querySelector(".input-submit4");
var inputSubmitButton = document.querySelector(".submitGuessButton");
var minRangeInput = document.getElementById("minimum");
var maxRangeInput = document.getElementById("maximum");
var updateRangeButton = document.getElementById("rangeButton");
var clearFormButton = document.getElementById("clearForm");
var guessCount = 0;
var exitButton = document.getElementById("exit");


inputSubmit1.addEventListener("input", enableSubmit);
inputSubmit2.addEventListener("input", enableSubmit);
inputSubmit3.addEventListener("input", enableSubmit);
inputSubmit4.addEventListener("input", enableSubmit);

function enableSubmit() {
  if (inputSubmit1.value != '' && inputSubmit2.value != '' && inputSubmit3.value != '' && inputSubmit4.value != '') {
    return true;
  } else {
    return false;
  };
};

function moveNamesAndGuesses() {
  console.log("moving names and guesses down");
  var chosenName1 = document.getElementById("guesserName1");
  var chosenName2 = document.getElementById("guesserName2");
  var chosenNumber1 = document.getElementById("guesserNumber1");
  var chosenNumber2 = document.getElementById("guesserNumber2");
  chosenName1.innerHTML = inputSubmit1.value;
  chosenName2.innerHTML = inputSubmit3.value;
  chosenNumber1.innerHTML = inputSubmit2.value;
  chosenNumber2.innerHTML = inputSubmit4.value;
}

inputSubmitButton.addEventListener("click", moveNamesAndGuesses);

function clearSubmitInput() {
  console.log('clear inputs');
document.querySelector(".input-submit1").value = "";
document.querySelector(".input-submit2").value = "";
document.querySelector(".input-submit3").value = "";
document.querySelector(".input-submit4").value = "";
}

// inputSubmitButton.addEventListener("click", clearSubmitInput)


inputSubmit1.addEventListener("input", enableClearFormButton);
inputSubmit2.addEventListener("input", enableClearFormButton);
inputSubmit3.addEventListener("input", enableClearFormButton);
inputSubmit4.addEventListener("input", enableClearFormButton);

function enableClearFormButton() {
  console.log("clear button enable");
  var nameInput = document.getElementsByClassName("name");
  var guessInput = document.getElementsByClassName("guess");
  var clearFormButton = document.getElementById("clearForm");
  if (nameInput.value === "") {
      clearFormButton.disabled = true;
    } else {
      clearFormButton.disabled = false
    }
  clearFormButton.classList.add("clearForm")
}

clearFormButton.addEventListener("click", clearForms);

function clearForms() {
  console.log('clear forms');
document.getElementById("guessInputField2").value = "";
document.getElementById("nameInputField2").value = "";
document.getElementById("guessInputField").value = "";
document.getElementById("nameInputField").value = "";
}

updateRangeButton.addEventListener("click", submitRange)
minRangeInput.addEventListener("input", submitRange)
maxRangeInput.addEventListener("input", submitRange)

function submitRange() {
  console.log('submit range');
  var minInput = document.getElementById("minimum");
  console.log("minInput:", minInput);
  var maxInput = document.getElementById("maximum");
  var submitRangeButton = document.getElementsByClassName("range-button");
  if (minInput.value !== "" && maxInput.value !== "") {
    submitRangeButton[0].classList.add("updateButton");
    submitRangeButton[0].disabled = false;
    }
  else {
    submitRangeButton[0].classList.remove("updateButton");
    submitRangeButton[0].disabled = true

  }
}

updateRangeButton.addEventListener("click", replaceCurrentRangeText)
var answer ;

function replaceCurrentRangeText() {
  var minRangeInput = document.getElementById("minimum");
  var maxRangeInput = document.getElementById("maximum");

  console.log("replacing text");
  var minGuess = document.getElementById("minimum").value;
    console.log(minGuess);
  var maxGuess = document.getElementById("maximum").value;
  console.log(maxGuess);
  var minRange = document.getElementById("minOfRange");
  var maxRange = document.getElementById("maxOfRange");

  minRange.innerHTML = minGuess;
  maxRange.innerHTML = maxGuess;

  answer = getWinningNumber();
  console.log(answer, "this da answer")

}



inputSubmit2.addEventListener("input", confirmGuessInput);
inputSubmit4.addEventListener("input", confirmGuessInput);

function confirmGuessInput() {
  var minGuess = document.getElementById("minOfRange").innerText;
  var maxGuess = document.getElementById("maxOfRange").innerText;
  var inputSubmitButton = document.getElementById("submitGuess");
  var guessInput1 = parseInt(document.getElementById("guessInputField").value);
  var guessInput2 = parseInt(document.getElementById("guessInputField2").value);
  if (guessInput1 >= minGuess && guessInput1 <= maxGuess && guessInput2 >= minGuess && guessInput2 <= maxGuess && enableSubmit()){
    inputSubmitButton.disabled = false;
  }
  else {
    inputSubmitButton.disabled = true;
  };

}


// need to call after user inputs range and hits update
function getWinningNumber() {
  var minRangeInput = parseInt(document.getElementById("minimum").value);
  var maxRangeInput = parseInt(document.getElementById("maximum").value);
  return Math.floor(Math.random() * (maxRangeInput - minRangeInput) + minRangeInput);

}


inputSubmitButton.addEventListener("click", compareGuessesToAnswer);

function compareGuessesToAnswer () {
  var guessInput1 = parseInt(document.getElementById("guessInputField").value);
  var guessInput2 = parseInt(document.getElementById("guessInputField2").value);
  var gameCard = document.getElementById("gamecard");
  if (guessInput1 === answer || guessInput2 === answer) {
    gamecard.style.visibility = "visible";
    minRangeInput.value = "";
    maxRangeInput.value = "";
    updateRangeButton.disabled = true;
    clearFormButton.disabled = true;
    updateRangeButton.classList.remove("updateButton");
    clearFormButton.classList.remove("clearForm");
    replaceGamecardChallengerNames();
    replaceWinnerName();
    disableInputsonGameReset();

  }
  clearSubmitInput()
}

function replaceGamecardChallengerNames() {
  var gamecardTitleName1 = document.getElementById("gamecardChallenger1Name");
  var gamecardTitleName2 = document.getElementById("gamecardChallenger2Name");
  var name1 = document.getElementById("nameInputField").value;
  var name2 = document.getElementById("nameInputField2").value;

  gamecardTitleName1.innerText = name1;
  gamecardTitleName2.innerText = name2;
}

function replaceWinnerName() {
  //if guess 1 is the right answer then display name 1
  var name1 = document.getElementById("nameInputField").value;
  var name2 = document.getElementById("nameInputField2").value;
  var guess1 = parseInt(document.getElementById("guessInputField").value);
  var guess2 = parseInt(document.getElementById("guessInputField2").value);
  var winnerName = document.getElementById("winnerName");
  if (guess1 === answer) {
    winnerName.innerText = name1
  }
  if (guess2 === answer) {
    winnerName.innerText = name2
  }
}


inputSubmitButton.addEventListener('click', countGuesses);


function countGuesses() {
  var guessCounterGamecard = document.getElementById("guessNumber");
guessCount+=2;
guessCounterGamecard.innerText = guessCount;

}

exitButton.addEventListener('click', deleteGameCard);

function deleteGameCard() {
  gamecard.style.visibility = "hidden";
  minRangeInput.value = "";
  maxRangeInput.value = "";
  inputSubmit1.value = "";
  inputSubmit2.value = "";
  inputSubmit3.value = "";
  inputSubmit4.value = "";
  console.log("calldisableinput");
}


minRangeInput.addEventListener('input', disableInputsonGameReset);

function disableInputsonGameReset() {
  console.log("rundisableinput")
  if (minRangeInput.value == "" && maxRangeInput.value == "") {
  inputSubmit1.disabled = true;
  inputSubmit2.disabled = true;
  inputSubmit3.disabled = true;
  inputSubmit4.disabled = true;
} else {
  inputSubmit1.disabled = false;
  inputSubmit2.disabled = false;
  inputSubmit3.disabled = false;
  inputSubmit4.disabled = false;
}
}
