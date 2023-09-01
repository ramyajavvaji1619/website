
   let movieContainer = document.getElementById("movieReviewsContainer");
   let titleInput = document.getElementById("titleInput");
   let textArea = document.getElementById("reviewTextarea");
   let addButton = document.getElementById("addBtn");
   
   function click() {
       let userText = document.createElement("h1");
       userText.textContent = "Movie Title:" + titleInput.value;
       movieContainer.appendChild(userText);
       titleInput.value = " ";
   
       let userTextPara = document.createElement("p");
       userTextPara.textContent = "your Review:" + textArea.value;
       movieContainer.appendChild(userTextPara);
       textArea.value = " ";
   }
   addButton.onclick = function () {
       click();
   };