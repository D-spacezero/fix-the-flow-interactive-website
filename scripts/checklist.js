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

/* afbeeldingen */

var button = document.getElementById("bediening-toggle-y");
var elementBediening = document.getElementById("bediening");


button.addEventListener("click", function() {
  elementBediening.classList.toggle("checklist-active-cat");
});

var button = document.getElementById("bediening-toggle-n");
var elementBediening = document.getElementById("bediening");

button.addEventListener("click", function() {
  elementBediening.classList.toggle("checklist-active-cat");
});

/* formulieren */

var button = document.getElementById("formulieren-toggle-y");
var elementFormulieren = document.getElementById("formulieren");


button.addEventListener("click", function() {
  elementFormulieren.classList.toggle("checklist-active-cat");
});

var button = document.getElementById("formulieren-toggle-n");
var elementFormulieren = document.getElementById("formulieren");

button.addEventListener("click", function() {
  elementFormulieren.classList.toggle("checklist-active-cat");
});