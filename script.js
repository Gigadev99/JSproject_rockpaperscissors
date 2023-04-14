function getComputerChoice() {
    return ["Rock","Paper","Scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "Tie";
    if (playerSelection == "Rock") {
        switch (computerSelection) {
            case "Paper":
                return false
            case "Scissors":
                return true;
        }
    }
    if (playerSelection == "Paper") {
        switch (computerSelection) {
            case "Scissors":
                return false
            case "Rock":
                return true;
        }
    }
    if (playerSelection == "Scissors") {
        switch (computerSelection) {
            case "Rock":
                return false
            case "Paper":
                return true;
                
        }
    }
}

function game() {
    let playerStatus = 0; let computerStatus = 0;
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice(); 
        let playerSelection = prompt("Choose from Rock, Paper, Scissors")
        if (playRound(playerSelection, computerSelection) === true) {
            playerStatus += 1;
            alert(`You won! ${playerSelection} beats ${computerSelection}`);
        } else if (playRound(playerSelection, computerSelection) === false) {
            computerStatus += 1;
            alert(`You lost! ${computerSelection} beats ${playerSelection}.`)
        } else alert("Tie!")
    }
    if (computerStatus > playerStatus) {
        alert(`You lost! Computer won ${computerStatus}-${playerStatus}.`)
    } else if (computerStatus < playerStatus){
        alert(`You won! ${playerStatus}-${computerStatus}.`)
    } else {
        alert(`Tie! ${computerStatus}-${playerStatus}.`)
    }
}
game()