
function enableClearFormButton() {
  console.log("clear button enable");
  var nameInput = document.getElementsByClassName("name");
  var guessInput = document.getElementsByClassName("guess");
  var clearFormButton = document.getElementById("clearForm");
  if (nameInput.value === "" ) {
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
// function replaceCurrentRangeText() {
//   console.log("replacing text");
//   var minGuess = document.getElementById("min");
//   var maxGuess = document.getElementById("max");
//   console.log('variables');
//   minGuess.replace(minGuess);
// }
