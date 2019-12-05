function enableClearFormButton() {
  console.log("fxn run");
  var nameInput = document.getElementsByClassName("name");
  var guessInput = document.getElementsByClassName("guess");
  var clearFormButton = document.getElementById("clearForm");
  clearFormButton.classList.add("clearForm");
}
