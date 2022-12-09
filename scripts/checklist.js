function updateProgressBar(value) {
  var progressBarFill = document.getElementById("progress-bar-fill");
  progressBarFill.style.width = value + "%";
}

function hideQuestion(questionNum) {
  var question = document.getElementById("question-" + questionNum);
  question.style.display = "none";
}

function showQuestion(questionNum) {
  var question = document.getElementById("question-" + questionNum);
  question.style.display = "block";
}

var button = document.getElementById("bediening-toggle");
var element = document.getElementById("bediening");

button.addEventListener("click", function() {
  // Toggle the class "active" on the element
  element.classList.toggle("checklist-active-cat");
});