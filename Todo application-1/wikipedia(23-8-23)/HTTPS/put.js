let userInputE1=document.getElementById("userInput");
let requestBodyE1= document.getElementById("requestBody");
let sendPutRequestBtnE1=document.getElementById("sendPutRequestBtn");
let loadingE1=document.getElementById("loading");
let httpResponseE1=document.getElementById("httpResponse");
let requestStatusE1=document.getElementById("requestStatus");


function sendPutHTTPRequest(){
    let userId=userInputE1.value;
      let url="https://gorest.co.in/public-api/users/" + userId;
      let requestBody=requestBodyE1.value;
      let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
               Accept: "application/json",
               Authorization: "Bearer 5c7b068c6c8405c5950af5119c6c3f32915c5946472c802282b1e2266da9dc11"
        },
        body:requestBody
      };

      loadingE1.classList.remove("d-none");
      requestStatusE1.classList.add("d-none");

      fetch(url,options)
      .then(function(response){
         return response.json();
      })
      .then(function(jsonData){
        loadingE1.classList.add("d-none");
        requestStatusE1.classList.remove("d-none");
        console.log(jsonData);

        let requestStaus=jsonData.code;
        let httpResponse=JSON.stringify(jsonData);

        requestStatusE1.textContent=requestStaus;
        httpResponseE1.textContent=httpResponse;
      });

    }
    
      sendPutRequestBtnE1.addEventListener("click",sendPutHTTPRequest);

























































