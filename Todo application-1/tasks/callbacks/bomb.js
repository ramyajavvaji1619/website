let defUserEl = document.getElementById("defUser");
let timerEl = document.getElementById("timer");

let counter = 10;
let uniqueId = setInterval(function () {
  let inputEl = defUserEl.value;
  counter = counter - 1;
  timerEl.textContent = counter;

  console.log(uniqueId);
  if (counter === 0) {
    
     timerEl.textContent="BOOM";
     timerEl.style.fontSize="80px";
     timerEl.style.color="red";
     timerEl.style.fontWeight="bold"
     timerEl.style.backgroundImage="url('https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif')"
    timerEl.style.height="120px";
    timerEl.style.margin ="20px";
    
    timerEl.style.backgroundPosition="center";
    timerEl.style.backgroundRepeat="no-repeat";
    
     clearInterval(uniqueId);
  } else if (inputEl === "ramya") {
    timerEl.textContent = "you did it!";
    timerEl.style.color="green";
    timerEl.style.backgroundImage="url('https://i.pinimg.com/originals/ec/c2/12/ecc2124116aa5a0ee1bc466c7b69dd8a.gif')"
    timerEl.style.height="120px";
    timerEl.style.margin ="20px";
    timerEl.style.backgroundPosition="center";
    timerEl.style.backgroundRepeat="no-repeat";
    
    clearInterval(uniqueId);
  }
}, 1000);
