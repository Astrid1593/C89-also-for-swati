var player1Name = localStorage.getItem("Player 1");
var player2Name = localStorage.getItem("Player 2");

var questionTurn = "player1";
var answerTurn = "player2";

var player1Score = 0;
var player2Score = 0;

document.getElementById("player1_Name").innerHTML = player1Name + " : "; 
document.getElementById("player2_Name").innerHTML = player2Name + " : "; 
document.getElementById("player1Score").innerHTML = player1Score; 
document.getElementById("player2Score").innerHTML = player2Score;


document.getElementById("question").innerHTML = "Question Turn: " + player1Name;
document.getElementById("answer").innerHTML = "Answer Turn: " + player2Name;

function send(){
    var getWord = document.getElementById("wordInput").value;
    var word = getWord.toLowerCase();
    var charAt1 = word.charAt(1);
    var halfOfLength = Math.floor(word.length / 2);
    var charAt2 = word.charAt(halfOfLength);
    var lengthMinus1 = word.length - 1;
    var charAt3 = word.charAt(lengthMinus1);
    var removeCharAt1 = word.replace(charAt1, "_");
    var removeCharAt_2 = removeCharAt1.replace(charAt2, "_");
    var removeCharAt3 = removeCharAt_2.replace(charAt3, "_");
    console.log(removeCharAt3);
    var question_word = "<h4 id='word_display'> Q. "+ removeCharAt3 +"</h4>";
    var inputBox = "<br>Answer: <input type='text' id='inputCheckBox' >"
    var checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    var row = question_word + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("wordInput").innerHTML = "";
}
function check(){
    var getAnswer = document.getElementById("inputCheckBox").value;
    var answer = getAnswer.toLowerCase();
    if(answer == word){
        if(answerTurn == "player1"){
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
            console.log("right")
        } else{
        player1Score = player1Score + 1;
        document.getElementById("player1Score").innerHTML = player1Score;
        }
    }
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("question").innerHTML = "Question turn: " + questionTurn;
    } else{
        questionTurn = "player1";
        document.getElementById("question").innerHTML = "Question turn: " + questionTurn;
    }
    if(answerTurn == "player2"){
        answerTurn = "player1";
        document.getElementById("answer").innerHTML = "Answer turn: " + answerTurn;
    } else{
        answerTurn = "player2";
        document.getElementById("answer").innerHTML = "Answer turn: " + answerTurn;
    }
    document.getElementById("inputCheckBox").innerHTML = "";
}