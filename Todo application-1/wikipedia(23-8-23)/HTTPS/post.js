
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");
let requestBodyEl = document.getElementById("requestBody");

function sendPostHTTPRequest() {
  let requestBody = JSON.parse(requestBodyEl.value);

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 5c7b068c6c8405c5950af5119c6c3f32915c5946472c802282b1e2266da9dc11",
    },
    body: JSON.stringify(requestBody), 
    
  };

  fetch("https://gorest.co.in/public-api/users", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      let requestStatus = jsonData.code;
      let httpResponse = JSON.stringify(jsonData);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
      console.log(jsonData)
    });
}

sendPostRequestBtnEl.addEventListener("click", sendPostHTTPRequest);
