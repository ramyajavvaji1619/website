let inputEl=document.getElementById("input");
let saveBtnEl=document.getElementById("saveBtn");
let clearBtn=doc.getElementById("clearBtn");

let storageKey="userInput";

let storageVal=localStorage.getItem(storagekey);

if(storageVal=== null) {
    localStorage.setItem(storageKey,"hello");

}
 inputEl.value=localStorage.getItem(storageKey);


    saveBtnEl.onclick=function(){
        let inputVal=inputEl.value;
        localStorage.setItem(storageKey,inputVal);
    };

    clearBtnEl.onclick=function(){
        inputEl.value="";
        localStorage.removeItem(storageKey);
    };