let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let storageKey = "userInput";
saveBtnEl.onclick = function () {
  let msgValue = msgEl.value;
  localStorage.setItem(storageKey, msgValue);
};

clearBtnEl.onclick = function () {
  msgEl.value = "";
  localStorage.removeItem(storageKey);
};

let storedUserInputValue = localStorage.getItem(storageKey);
if (storedUserInputValue !== null) {
  msgEl.value = storedUserInputValue;
} else {
  msgEl.value = "";
}
