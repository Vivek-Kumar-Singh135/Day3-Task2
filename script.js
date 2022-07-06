var turn = 1;
var score1 = 0;
var score2 = 0;

function playGame() {
    var op = Math.floor(Math.random() * 6) + 1
    console.log(op);
    if (turn == 1) {
        document.getElementById("result").innerHTML = "Player 1's Turn"
        document.getElementById("player1").value = score1 + op;
        score1 += op;
        console.log(score1);
        document.getElementById("dice").value = op;
        turn = 2;
    } else {
        document.getElementById("result").innerHTML = "Player 2's Turn"
        document.getElementById("player2").value = score2 + op;
        score2 += op;
        console.log(score1);
        document.getElementById("dice").value = op;
        turn = 1;
    }
    if (score1 >= 30) {
        document.getElementById("result").innerText = "Player 1 Wins"
    } else if (score2 >= 30) {
        document.getElementById("result").innerText = "Player 2 Wins";
    }
}