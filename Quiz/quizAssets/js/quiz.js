var startDiv = document.getElementById("startScreen");
var gameDiv = document.getElementById("quizBox");

var questionTitle = document.getElementById("question");

var choices = document.getElementsByClassName('choice');

var highScore = document.getElementById('highScores');

var yourScore = document.getElementById('yourscore');

var displayScore = document.getElementById('displayscore');
var submit = document.getElementById('submit1');


for (var choice of choices) {
    choice.onclick = checkAnswer
}

var qIndex = 0;

var score = 0;
var counter;

var timer = document.getElementById('timer');

startDiv.onclick = start;


function start() {
    counter = 76;
    startDiv.classList.add('hide');
    gameDiv.classList.remove('hide');
    displayQuestion();
    countDown();
}

function quizEnd(){
    gameDiv.classList.add('hide');
    yourScore.classList.remove('hide');
    //localStorage.setItem('score', score);
    displayScore.innerHTML = score;
    }


function countDown(){
    counter = counter - 1 ;
    if ( counter < 76) { 
        timer.innerHTML = counter;

    }
    if ( counter < 1){
        window.clearInterval(update);
   quizEnd(); 
}
}
 update = setInterval('countDown()', 1000);


function displayQuestion() {

    questionTitle.innerText = questions[qIndex].title
    for (var i in choices) {
        choices[i].innerText = questions[qIndex].choices[i]
     }
    
     }
     
    function viewhighscore(){
        window.location.replace('./highscores.html');
     }

submit.onclick = submitScore;

function submitScore(){
    var initials = document.getElementById('initials');
   
     
    localStorage.setItem(initials.value, score);
     console.log(localStorage);
     //var highscore = localStorage.getItem('score');
     viewhighscore();
}

   

    

function checkAnswer() {
  if ( this.innerText == questions[qIndex].answer){
      alert ('correct');
      score +=10;
      console.log(score);
  }else{
     alert( 'wrong');
     counter -=15;
     
  }





    qIndex++;
    
    if (qIndex < questions.length){
        displayQuestion();
    
    }else{
        quizEnd();
    }
    
}
