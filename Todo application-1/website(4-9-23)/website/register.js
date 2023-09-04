let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let phoneEl = document.getElementById("phone");
let numErrMsgEl = document.getElementById("numErrMsg");
let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let registerFormEl = document.getElementById("registerForm");
let buttonErrMsgEl=document.getElementById("buttonErrMsg");
let login12El=document.getElementById("login12");

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
phoneEl.addEventListener("blur", function (event) {
    if (phoneEl.value === "") {
      numErrMsgEl.textContent = "required*";
    } else {
      numErrMsgEl.textContent = "";
    }
  });
  passwordEl.addEventListener("blur", function (event) {
    if (passwordEl.value === "") {
      passwordErrMsgEl.textContent = "required*";
    } else {
      passwordErrMsgEl.textContent = "";
    }
  });
registerFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    if (passwordEl.value, emailEl.value,phoneEl.value,nameEl.value === "") {
        buttonErrMsgEl.textContent = "Please fill the above details*";
      } else {
        buttonErrMsgEl.textContent = "Register successfully!!!";
        buttonErrMsgEl.style.color="green";
        buttonErrMsgEl.style.fontSize="20px";
       
       
document.getElementById("login12").click();




      }
    });

    