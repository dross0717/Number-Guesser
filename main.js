
function enableClearFormButton() {
  console.log("fxn")
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
