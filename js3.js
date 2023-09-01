
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);


function checkGuess() {
    console.log(randomNumber);
let guessedNumber = parseInt(userInput.value);
if (guessedNumber > randomNumber) {
gameResult.textContent = "Too High! Try Again.";
gameResult.style.backgroundColor = "blue";
}
else if (guessedNumber < randomNumber) {
gameResult.textContent = "Too Low! Try Again.";
gameResult.style.backgroundColor = "blue";
}
else if (guessedNumber === randomNumber) {
gameResult.textContent = "Congratulations! You got it right.";
gameResult.style.backgroundColor = "green";
}
else {
gameResult.textContent = "Please provide a valid input.";
gameResult.style.backgroundColor = "#1e217c";
}
}







let myArray=[5,6,7,8,9,"five"];
console.log(myArray);


let a=[5,15,25,35,45];
a[1]=55;
console.log(a);
let b =[3,6,7,9,3,]
b[3]=555;
console.log(b);


let myArray1=[2,6,9,0,5,4,3,987,685,7645,"ramya"];
 let lengthOfArray = myArray1.length;
console.log(lengthOfArray);
let myArray2=[231,867,987,678,56,998,678,45,435,97,589,321,237,876,658,55,4765];
let lengthOfArray1 = myArray2.length;
console.log(lengthOfArray1);



let r = [5489,8637,7673,65,9785,];
r.push(5555);
console.log(r);
let s=[6773,6734,6276278,9786,4528994,68381];
s.push(464237);
console.log(s);

let d=[6736,674,5435,90780,56,907786];
let lastArray=d.pop();
console.log(d);
console.log(lastArray);




// let h1Element1 = document.createElement("h1");
// h1Element1.textContent = "Web Technologies";
// console.log(h1Element1); 
// document.body.appendChild(h1Element1);
// let h2Element1 = document.createElement("h2");
// h2Element1.textContent="ramya";
// console.log(h2Element1);
// document.body.appendChild(h2Element);
// let h3Element = document.createElement("h3");
// h3Element.textContent="Chowdary";
// console.log(h3Element);
// document.body.appendChild(h3Element);




let h1Element = document.createElement("h1");
h1Element.textContent ="Ramya";
let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);
let btnElement = document.createElement("button");
btnElement.textContent = "Change heading";
containerElement.appendChild(btnElement);
btnElement.onclick=function()
{
    console.log("click event triggered");
};
 btnElement.onclick=function()
 {
    h1Element.textContent="Chowdary";
    h1Element.classList.add("head");
    console.log(h1Element);
 }


let h2Element=document.createElement("h2");
h2Element.textContent="Ramya";
let myElement=document.getElementById("name");
myElement.appendChild(h2Element);
 let btnElement1 = document.createElement("button");
 btnElement1.textContent="change heading";
 myElement.appendChild(btnElement1);
  btnElement1.onclick=function()
  {
    console.log("click event triggered");
  }
  btnElement1.onclick=function()
  {
    h2Element.textContent="Javvaji";
    h2Element.classList.add("head2");
    console.log(h2Element);
  }

  let person = {
    firstName: "Ramya",
    lastName: "Chowdary",
    age: 26,
    };
    person["gender"]="female";

    console.log(person); 
 
    console.log(person.gender);

   console.log(person["age"]);
   let A="age";
   console.log(person[A]);
   console.log(person.A);
    let {gender, lastName}=person;
    console.log(lastName);
    let{firstName}=person;
    console.log(firstName);


    let person1 = {
      firstName: "Raghu",
      lastName: "javvaji",
      age: 28,
      run: function () {
      console.log("Start Running.");
      },
      };
      person1.run(); 


      let person2={
        firstName: "charan",
        lastName: "velicheti",
        age: "26",
        habbits:["playing shuttle","dancing","reading"],

      };
      console.log(person2.habbits);
      console.log(person2.habbits[2]);
      console.log(person2.habbits[0]);

      let person3={
        firstName: "charan",
        lastName: "velicheti",
        age: "26",
        habbits:["playing shuttle","dancing","reading"],
        car: {
          name:"audi",
          model:"A5",
          color:"black",

        }
   
      };
      console.log(person3.car.name);
      console.log(person3.car.color);
        