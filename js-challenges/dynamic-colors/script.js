// function makeBodyBlue() {
//   document.body.style.background = "#0f62fe";
// }
// function makeBodyPink() {
//   document.body.style.background = "#ff7eb6";
// }
// function makeBodyGreen() {
//   document.body.style.background = "#42be65";
// }
// document.querySelector("#blue").addEventListener("click", makeBodyBlue);
// document.querySelector("#pink").addEventListener("click", makeBodyPink);
// document.querySelector("#green").addEventListener("click", makeBodyGreen);

// below lets see how to use it with single function closures
function colorChange(change) {
  // document.body.style.background = change;
  return function () {
    document.body.style.background = change;
  };
}
const blue = colorChange("#0f62fe");
const pink = colorChange("#ff7eb6");
const green = colorChange("#42be65");
document.querySelector("#blue").addEventListener("click", blue);
document.querySelector("#pink").addEventListener("click", pink);
document.querySelector("#green").addEventListener("click", green);

// document
//   .querySelector("#blue")
//   .addEventListener("click", () => colorChange("#0f62fe"));
// document
//   .querySelector("#pink")
//   .addEventListener("click", () => colorChange("#ff7eb6"));
// document
//   .querySelector("#green")
//   .addEventListener("click", () => colorChange("#42be65"));
