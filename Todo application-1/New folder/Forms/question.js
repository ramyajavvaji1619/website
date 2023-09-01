
const questionsForm = document.getElementById('questionsForm');
const resultDiv = document.getElementById('result');

questionsForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    if (selectedAnswer.value === 'Delhi') {
      resultDiv.textContent = 'Success! Delhi is the correct answer.';
      resultDiv.style.color = 'green';
    } else {
      resultDiv.textContent = 'Wrong answer! Please try again.';
      resultDiv.style.color = 'red';
    }
  } else {
    resultDiv.textContent = 'Please select an answer.';
    resultDiv.style.color = 'red';
  }
});