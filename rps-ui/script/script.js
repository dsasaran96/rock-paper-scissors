let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Sword";
    if(letter === "p") return "Shield";
    return "Mace";
}

function win(user, computer) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!`;
    userChoice_div.classList.add(`green-glow`);
    setTimeout(() => userChoice_div.classList.remove(`green-glow`), 300)
}

function lose(user, computer) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You lose!`;
    userChoice_div.classList.add(`red-glow`);
    setTimeout(() => userChoice_div.classList.remove(`red-glow`), 300)
}

function draw(user, computer) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} is equal to ${convertToWord(computer)}${smallCompWord}. It's a draw!`;
    userChoice_div.classList.add(`gray-glow`);
    setTimeout(() => userChoice_div.classList.remove(`gray-glow`), 300)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
    playAgain();
}

function playAgain() {
    const actionMessage_p = document.getElementById("action-message");
    if(userScore == 5 || computerScore == 5) {
        if(userScore > computerScore) {
            result_p.innerHTML = `You won! Play again?`;
            reset();
        } else {
            result_p.innerHtml = `You lost.. :( Play again?`;
            reset();
    }
}
}

function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function main(){
    rock_div.addEventListener('click', function () {
        game("r")
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

    if(userScore >= 5 || computerScore >= 5) {
        rock_div.addEventListnere(`click`, function () {
            reset();
        })
        paper_div.addEventListnere(`click`, function () {
            reset();
        })
        scissors_div.addEventListnere(`click`, function () {
            reset();
        })
    }
}

main();