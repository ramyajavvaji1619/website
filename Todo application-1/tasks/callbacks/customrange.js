let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");
let startBtn = document.getElementById("startBtn");

function displayNumbers(fromCount, toCount) {
  let currentCount = fromCount;
  counterTextEl.textContent = currentCount;

  let timerId = setInterval(function () {
    if (currentCount < toCount) {
      currentCount = +1;
      counterTextEl.textContent = currentCount;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

function onClickStart() {
  let fromVal = fromUserInputEl.value;
  let toVal = toUserInputEl.value;
  if (fromVal === "") {
    alert("enter the from value");
  } else if (toVal === "") {
    alert("enter the to value");
  } else {
    let fromValInteger = parseInt(fromVal);
    let toValInteger = parseInt(toVal);

    displayNumbers(fromValInteger, toValInteger);
  }
}
