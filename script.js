const myotp = document.querySelector("#otp");
const continBtn = document.querySelector("#continue");
const firstInp = document.querySelector("#f-input");
myotp.style.display = "none";

function validateInput() {
  if (firstInp.value < 10) {
    continBtn.style.display = "none";
  } else {
    continBtn.style.display = "block";
  }
}
// // validateInput();
function hideFunc() {
  myotp.style.display = "block";
}
// hideFunc();
continBtn.addEventListener("click", hideFunc);

function showloginbox() {
  const targetDiv = document.querySelector(".login-top");
  if (targetDiv.style.display == "none") targetDiv.style.display = "flex";
  else targetDiv.style.display = "none";
}

function showappointnbox() {
  const targetbox = document.querySelector(".appointment-popup");
  if (targetbox.style.display == "none") targetbox.style.display = "flex";
  else targetbox.style.display = "none";
}
