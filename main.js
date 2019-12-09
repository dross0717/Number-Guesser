var inputSubmit1 = document.querySelector(".input-submit1");
var inputSubmit2 = document.querySelector(".input-submit2");
var inputSubmit3 = document.querySelector(".input-submit3");
var inputSubmit4 = document.querySelector(".input-submit4");
var inputSubmitButton = document.querySelector(".submitGuessButton");

inputSubmit1.addEventListener("input", enableSubmit);
inputSubmit2.addEventListener("input", enableSubmit);
inputSubmit3.addEventListener("input", enableSubmit);
inputSubmit4.addEventListener("input", enableSubmit);

function enableSubmit() {
  if (inputSubmit1.value != '' && inputSubmit2.value != '' && inputSubmit3.value != '' && inputSubmit4.value != '') {
    inputSubmitButton.disabled = false;
  } else {
    inputSubmitButton.disabled = true;
  };
};

function moveNamesAndGuesses() {
  console.log("moving names and guesses down");
  var chosenName1 = document.querySelector(".guesserName1");
  var chosenName2 = document.querySelector(".guesserName2");
  var chosenNumber1 = document.querySelector(".guesserNumber1");
  var chosenNumber2 = document.querySelector(".guesserNumber2");
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

inputSubmitButton.addEventListener("click", clearSubmitInput)

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

function clearForms() {
  console.log('clear forms');
document.getElementById("guessInputField2").value = "";
document.getElementById("nameInputField2").value = "";
document.getElementById("guessInputField").value = "";
document.getElementById("nameInputField").value = "";
}

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
function replaceCurrentRangeText() {
  console.log("replacing text");
  var minGuess = document.getElementById("minimum").value;
    console.log(minGuess);
  var maxGuess = document.getElementById("maximum").value;
  console.log(maxGuess);
  var minRange = document.getElementById("minOfRange");
  var maxRange = document.getElementById("maxOfRange");

minRange.innerHTML = minGuess;
maxRange.innerHTML = maxGuess;

}

function confirmGuessInput() {
  var minGuess = document.getElementById("minOfRange").innerText;
  var maxGuess = document.getElementById("maxOfRange").innerText;
  var inputSubmitButton = document.getElementById("submitGuess");
  var guessInput1 = parseInt(document.getElementById("guessInputField").value);
  var guessInput2 = parseInt(document.getElementById("guessInputField2").value);
  if (guessInput1 >= minGuess && guessInput1 <= maxGuess && guessInput2 >= minGuess && guessInput2 <= maxGuess){
    inputSubmitButton.disabled = false;
  }
  else {
    inputSubmitButton.disabled = true;
  };
}
