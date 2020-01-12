var clear = document.getElementById('clear');

clear.onclick = clearscore;
function clearscore(){
    localStorage.clear();
    $("#highscoreslist").empty();
}
$(document).ready(function(){

    addhighscore();

});
 function addhighscore(){
    for (var i = 0; i < localStorage.length; i++){
     var initials = localStorage.key(i)
        var curscore = localStorage.getItem(localStorage.key(i));
        $("#highscoreslist").append('<li>'+  initials+ ' : ' + curscore + '</li>');
        //$('body').append(localStorage.getItem(localStorage.key(i)));
    }
 }
