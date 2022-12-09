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

/*----Toggle border sidebar-------*/

var button = document.getElementById("bediening-toggle-y");
var element = document.getElementById("bediening");


button.addEventListener("click", function() {
  element.classList.toggle("checklist-active-cat");
});

var button = document.getElementById("bediening-toggle-n");
var element = document.getElementById("bediening");

button.addEventListener("click", function() {
  element.classList.toggle("checklist-active-cat");
});