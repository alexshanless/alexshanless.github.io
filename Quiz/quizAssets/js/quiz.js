var startDiv = document.getElementById("startScreen");
var gameDiv = document.getElementById("quizBox");

var questionTitle = document.getElementById("question")

var choices = document.getElementsByClassName('choice');
for (var choice of choices) {
    choice.onclick = checkAnswer
}

var qIndex = 0;


startDiv.onclick = start;


function start() {
    startDiv.classList.add('hide');
    gameDiv.classList.remove('hide');
    displayQuestion();
}
function displayQuestion() {
    console.log(questions[qIndex])

    questionTitle.innerText = questions[qIndex].title
    for (var i in choices) {
        choices[i].innerText = questions[qIndex].choices[i]
    }
}
function checkAnswer() {
    console.log(this.innerText, questions[qIndex].answer);



    qIndex++;
    displayQuestion();
}