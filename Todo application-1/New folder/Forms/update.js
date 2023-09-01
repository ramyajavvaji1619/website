let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

let errorMsg = "Required*";
newPasswordEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    newPasswordErrMsgEl.textContent = errorMsg;
  } else {
    newPasswordEl.textContent = "";
  }
});
confirmPasswordEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    confirmPasswordErrMsgEl.textContent = errorMsg;
  } else {
    confirmPasswordEl.textContent = "";
  }
});