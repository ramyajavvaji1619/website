let wordCloud = [
  "hello",
  "how",
  "what",
  "youself",
  "name",
  "victory",
  "food",
  "beautiful",
  "written",
  "awesome",
  "where",
  "who",
  "lovely",
];
let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let errorMsg = "please enter a word";

function createAndAddWordToWordCloud(word) {
  let randomFontSize = Math.ceil(Math.random() * 40) + "px";
  let wordEl = document.createElement("span");
  wordEl.textContent = word;
  wordEl.style.fontSize = randomFontSize;
  wordEl.classList.add("m-3");
  wordsContainerEl.appendChild(wordEl);
  

}

for (let word of wordCloud) {
  onAddWordToWordCloud(word);
}

function onAddWordToWordCloud() {
  let userEnteredWord = userInputEl.value;
  if (userEnteredWord !== "") {
    userInputEl.value = "";
    errorMsgEl.textContent = "";
    createAndAddWordToWordCloud(userEnteredWord);
  } else {
    errorMsgEl.textContent = errorMsg;
  }
}
