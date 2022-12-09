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