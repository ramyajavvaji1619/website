let chatbotMsgList = ["hi", "good morning", "good evening", "how can i help you?", "good night", "had ur lunch","hello","what about you","what are you doing?","wassup"];
  let chatContainerEl = document.getElementById("chatContainer");
  let userInputEl = document.getElementById("userInput");
  
  function sendMsgToChatbot() {
      let userMsg = userInputEl.value;
  
      let msgContainerEl = document.createElement("div");
      msgContainerEl.classList.add("msg-to-chatbot-container");
      chatContainerEl.appendChild(msgContainerEl);
  
      let userMsgEl = document.createElement("span");
      userMsgEl.textContent = userMsg;
      userMsgEl.classList.add("msg-to-chatbot");
      msgContainerEl.appendChild(userMsgEl);
  
      userInputEl.value = "";
      getReplyFromChatbox();
  }
  
  function getReplyFromChatbox() {
      let noOfChatbotMsgs = chatbotMsgList.length;
      let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs)];
  
      let msgContainerEl = document.createElement("div");
      msgContainerEl.classList.add("msg-from-chatbox-container");
      chatContainerEl.appendChild(msgContainerEl);
  
      let chatbotMsgEl = document.createElement("span");
      chatbotMsgEl.textContent = chatbotMsg;
      chatbotMsgEl.classList.add("msg-from-chatbox");
      msgContainerEl.appendChild(chatbotMsgEl);
  }