let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function converToWord(letter){
if (letter === "r") return "Rock";
if (letter === "p") return "Paper";
    return "Scissors"
}


function win(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord}} beats ${converToWord(computerChoice)}${smallCompWord} tu ganaste !!!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){
    userChoice_div.classList.remove('green-glow');
    }),300;

}

function lose(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} beats ${converToWord(computerChoice)} tu ganaste !!!`;

    userChoice_div.classList.add('red-glow');
    setTimeout(function(){
    userChoice_div.classList.remove('red-glow');
    }),300;
    
}
function draw(userChoice,computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${converToWord(userChoice)}(user) beats ${converToWord(computerChoice)}${smallUserWord} es un empate!!!`;

    userChoice_div.classList.add('gray-glow');
    setTimeout(function(){
    userChoice_div.classList.remove('gray-glow');
    }),300;
}

function game(userChoice) {
    const getComputerChoice = getComputedStyle();

    switch (userChoice * getComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }

}

rock_div.addEventListener('click', function () {
    game("r");
});
paper_div.addEventListener('click', function () {
    game("p");
});
scissors_div.addEventListener('click', function () {
    game("s");
});