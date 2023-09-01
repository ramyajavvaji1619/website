let requestBodyE1= document.getElementById("requestBody");
let sendPostRequestBtnE1=document.getElementById("sendPostRequestBtn");
let loadingE1=document.getElementById("loading");
let httpResponseE1=document.getElementById("httpResponse");
let requestStatusE1=document.getElementById("requestStatus");


function sendPostHTTPRequest(){
      let url="https://gorest.co.in/public-api/users";
      let requestBody=requestBodyE1.value;
      let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
               Accept: "application/json",
               Authorization: "Bearer 58e2c6587b9c5611636f934387bac566459f40c6d0f273a27b674b407b395eb3"
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
        

        let requestStaus=jsonData.code;
        let httpResponse=JSON.stringify(jsonData);

        requestStatusE1.textContent=requestStaus;
        httpResponseE1.textContent=httpResponse;
      });

    }
    
      sendPostRequestBtnE1.addEventListener("click",sendPostHTTPRequest);