let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let sendBtnRequestEl = document.getElementById("sendBtnRequest");
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");

let formData = {
  requestUrl: "https://gorest.co.in/public-api/users",
  requestMethod: "POST",
  requestBody: "",
};

requestUrlEl.addEventListener("change", function (event) {
  formData.requestUrl = event.target.value;
});

requestBodyEl.addEventListener("change", function (event) {
  formData.requestBody = event.target.value;
});

requestMethodEl.addEventListener("change", function (event) {
  formData.requestMethod = event.target.value;
});

function validateRequestUrl(formData) {
  let { requestUrl } = formData;
  if (requestUrl === "") {
    requestUrlErrMsg.textContent = "required";
  } else {
    requestUrlErrMsg.textContent = "";
  }
}

function sendRequest(formData) {
    let { requestUrl, requestMethod, requestBody } = formData;



//   let options = {
//     method: requestMethod,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization:
//         "Bearer 58e2c6587b9c5611636f934387bac566459f40c6d0f273a27b674b407b395eb3",
//     },
//     body: requestBody,
//   };

//   fetch(requestUrl, options)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (jsonData) {
//       let responseStatus = jsonData.code;
//       let responseBody = JSON.stringify(jsonData);
//       responseStatusEl = responseStatus;
//       responseBodyEl = responseBody;
//     });
// }

let options = {
    method: requestMethod,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 58e2c6587b9c5611636f934387bac566459f40c6d0f273a27b674b407b395eb3",
    },
    body: requestBody,
  };

  fetch(requestUrl, options)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (jsonData) {
      let responseStatus = jsonData.code;
      let responseBody = JSON.stringify(jsonData);
      responseStatusEl.textContent = responseStatus;
      responseBodyEl.textContent = responseBody;
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}

consoleFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validateRequestUrl(formData);
  sendRequest(formData);
});
