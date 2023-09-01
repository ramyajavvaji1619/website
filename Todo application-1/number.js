let numbers = [17, 31, 77, 20, 63];


let findBtn1 = document.getElementById("findBtn");
let indexOfNumber1 = document.getElementById("indexOfNumber");
let userInput1 = document.getElementById("userInput");

findBtn1.onclick = function () {
    let number = parseInt(userInput1.value);
    console.log(number);
    console.log(numbers.indexOf(number));
    indexOfNumber1.textContent = numbers.indexOf(number);
}