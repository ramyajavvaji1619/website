let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendGetHTTPRequest() {
  let options = {
    method: "GET",
  };
  let data = [];

  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");

  fetch("https://gorest.co.in/public-api/users", options)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      loadingEl.classList.add("d-none");
      requestStatusEl.classList.remove("d-none");

      let requestStatus = data.code;
      let httpResponse = JSON.stringify(data);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
    });
}

sendGetRequestBtnEl.addEventListener("click", sendGetHTTPRequest);
