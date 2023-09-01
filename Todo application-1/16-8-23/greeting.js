let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let ParsedValue=JSON.parse(greeting);

let greetTextEl=document.getElementById("greetText");
let greetFromEl=document.getElementById("greetFrom");
let greetToEl=document.getElementById("greetTo");


greetTextEl.textContent=ParsedValue.greetText;
greetFromEl.textContent="From:" + ParsedValue.from;
greetToEl.textContent="Top:"+ ParsedValue.to;