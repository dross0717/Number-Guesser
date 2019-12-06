// var inputFieldSubmit = document.querySelectorAll(".input-submit")
//
// for (var i = 0; i < inputFieldSubmit.length; i++) {
//   inputFieldSubmit[i].addEventListener("keyup", enableSubmit)
// };
//
// function enableSubmit() {
//   var challengerSubmit = document.querySelector(".submitGuessButton");
//   for (var i = 0; i < inputFieldSubmit.length; i++){
//     if (inputFieldSubmit[i].length.value > 0){
//       challengerSubmit.disabled = true;
//     } else {
//       challengerSubmit.disabled = false;
//     };
//   };
// };



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
