
let spanValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");


let parsedNumber = parseInt(localStorage.getItem('counterValue')) || 0;


spanValue.textContent = parsedNumber;

incrementBtn.onclick = function() {
    parsedNumber = parsedNumber + 1;
    spanValue.textContent = parsedNumber;

    
    localStorage.setItem('counterValue', parsedNumber.toString());
}




































