let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let addUserFormEl = document.getElementById("addUserForm");


nameEl.addEventListener("blur", function (event) {
  if (nameEl.value === "") {
    nameErrMsgEl.textContent = "required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});
emailEl.addEventListener("blur", function (event) {
  if (emailEl.value === "") {
    emailErrMsgEl.textContent = "required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
});
addUserFormEl.addEventListener("submit", function(event){
    event.preventDefault();
})
