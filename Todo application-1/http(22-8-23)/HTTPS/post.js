
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
        "Bearer dae74dbf995b4a94743b2e5d13b4e155214f37fd241ca996de471bb4dd984e8b",
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
    });
}

sendPostRequestBtnEl.addEventListener("click", sendPostHTTPRequest);
