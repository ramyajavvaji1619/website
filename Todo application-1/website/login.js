let email1El = document.getElementById("email1");
let email1ErrMsgEl = document.getElementById("email1ErrMsg");
let password1El = document.getElementById("password1");
let password1ErrMsgEl = document.getElementById("password1ErrMsg");
let loginFormEl = document.getElementById("loginForm");
let buttonErrMsg1El=document.getElementById("buttonErrMsg1");
// let login123El=document.getElementById("login123");



email1El.addEventListener("blur", function (event) {
    if (email1El.value === "") {
      email1ErrMsgEl.textContent = "required*";
    } else {
      email1ErrMsgEl.textContent = "";
    }
  });
  password1El.addEventListener("blur", function (event) {
    if (password1El.value === "") {
      password1ErrMsgEl.textContent = "required*";
    } else {
      password1ErrMsgEl.textContent = "";
    }
  });

  loginFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    if (password1El.value, email1El.value === "") {
        buttonErrMsg1El.textContent = "Please fill the above details*";
      } else {
        buttonErrMsg1El.textContent = "Login successfully!!!";
        buttonErrMsg1El.style.color="green";
        buttonErrMsg1El.style.fontSize="20px";
            

        document.getElementById("login123").click();

      }
    });