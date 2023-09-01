let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending  sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];
let valuesToStringfiy = [bikes, person, todos];

let jsonContainerEl = document.getElementById("jsonContainer");

function createAndAppendValue(stringfiledValue) {
  let valueContainerEl = document.createElement("div");
  valueContainerEl.classList.add("value-container");
  jsonContainerEl.appendChild(valueContainerEl);

  let valueEl = document.createElement("span");
  valueEl.textContent = stringfiledValue;
  valueEl.classList.add("value");
  valueContainerEl.appendChild(valueEl);
}

function convertToJSONString(value) {
  let stringfiledValue = JSON.stringify(value);
  createAndAppendValue(stringfiledValue);
}

for (let value of valuesToStringfiy) {
  convertToJSONString(value);
}
