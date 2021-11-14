function computerPlay() {
    let x = Math.random();
    if ( x <= 0.34 ) {
        return "Rock";
    } else if ( x <= 0.64) {
        return "Paper";
    }
    return "Scissors";
}

function userPlay () {
    return prompt("What do you chose? Rock, paper, or scissors?");
}

function game(user, computer) {

        if (user.toLowerCase() == computer.toLowerCase())
        {
            return "Tie!";
        }

        if (user.toLowerCase() == "rock")
        {
            if(computer.toLowerCase()=="scissors")
            {
                return "You win! Rock beats Scissors!";
            }

            return "You lose! Paper beats Rock!";
        }

        if(user.toLowerCase() == "scissors")
        {
            if(computer.toLowerCase() == "paper")
            {
                return "You win! Scissors beats Paper!";
            }
            return "You lose! Paper beats Scissors!";
        }

        if(user.toLowerCase() == "paper")
        {
            if(computer.toLowerCase() == "rock")
            {
                return "You win! Paper beats Rock!";
            }
            return "You lose! Scissors beats Paper!";
        }

    }

    function games5 () {
        document.getElementById("p1").innerHTML = game(userPlay(), computerPlay());
        document.getElementById("p2").innerHTML = game(userPlay(), computerPlay());
        document.getElementById("p3").innerHTML = game(userPlay(), computerPlay());
        document.getElementById("p4").innerHTML = game(userPlay(), computerPlay());
        document.getElementById("p5").innerHTML = game(userPlay(), computerPlay());
    } 