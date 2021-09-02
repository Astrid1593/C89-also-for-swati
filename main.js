var player1Name;
var player2Name;
function startGame(){
    player1Name = document.getElementById("player1Input").value;
    player2Name = document.getElementById("player2Input").value;
    localStorage.setItem("Player 1", player1Name);
    localStorage.setItem("Player 2", player2Name);
    window.location = "gamePage.html";
}