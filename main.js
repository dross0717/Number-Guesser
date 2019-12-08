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

function clearSubmitInput() {
  console.log('clear inputs');
document.querySelector(".input-submit1").value = "";
document.querySelector(".input-submit2").value = "";
document.querySelector(".input-submit3").value = "";
document.querySelector(".input-submit4").value = "";
}


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
