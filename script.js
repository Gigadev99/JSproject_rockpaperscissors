function getComputerChoice() {
    return ["Rock","Paper","Scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    player.textContent = `You chose: ${playerSelection}`
    computer.textContent = `Computer chose: ${computerSelection}`
    rounds++;
    if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock"    ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++;
    }
    else if (playerSelection == computerSelection) {}
    else {
        computerScore++;
    }
    score.textContent = `Score: ${playerScore} - ${computerScore}`
    game();
}
const buttons   = document.querySelectorAll(".buttons button")
const rock      = document.querySelector("#rock");
const paper     = document.querySelector("#paper");
const scissors  = document.querySelector("#scissors");
const player    = document.querySelector(".player");
const computer  = document.querySelector(".computer")
const score     = document.querySelector(".score")
const winner    = document.querySelector(".winner")
const last      = document.querySelector(".last")
rock.addEventListener('click', r = () => playRound("Rock", getComputerChoice()))
paper.addEventListener('click', p = () => playRound("Paper", getComputerChoice()))
scissors.addEventListener('click', s = () => playRound("Scissors", getComputerChoice()))


let rounds = 0;
let playerScore = 0;
let computerScore = 0;

function game() {
    if (rounds == 5) {
        if (playerScore > computerScore) {
            winner.textContent = `You won!`
        }
        else if (playerScore == computerScore) {
            winner.textContent = "Tie!"
        }
        else winner.textContent = 'You lost! Computer won.'
        
        rock.removeEventListener('click', r);
        paper.removeEventListener('click', p);
        scissors.removeEventListener('click', s);
        const restart = document.createElement("button")
        restart.textContent = "PLAY AGAIN";
        restart.classList.add("playagain")
        restart.addEventListener('click', () => {
            rounds = 0; playerScore = 0; computerScore = 0;
            rock.addEventListener('click', r = () => playRound("Rock", getComputerChoice()))
            paper.addEventListener('click', p = () => playRound("Paper", getComputerChoice()))
            scissors.addEventListener('click', s = () => playRound("Scissors", getComputerChoice()))
            winner.textContent = "";
            score.textContent = "Score:"
            restart.remove();
        });
        last.appendChild(restart);
    }
}
