function getComputerChoice() {
    const rndInt = Math.floor(Math.random() * 3);
    let options = ["Rock", "Paper", "Scissors"];
    return options[rndInt];
}

function playRound(computerSelection, playerSelection) {
    let debug = false;
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    let playerWins = roundWinner(playerSelection, computerSelection);
    let computerWins = roundWinner(computerSelection, playerSelection);

    if (debug == true){
        console.log(playerSelection)
        console.log(computerSelection)
        console.log(playerWins)
        console.log(computerWins)    
    }
    if (playerWins){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    if (computerWins){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    if (!(playerWins || computerWins)){
        return "This round is a tie.";
    }
}

function roundWinner(a, b) {
    if (a == "Rock" && b == "Scissors" 
    ||  a == "Paper" && b == "Rock" 
    ||  a == "Scissors" && b == "Paper"){
        return true;
    } else{
        return false;
    }
}

function game() {
    playerWins = 0;
    computerWins = 0;
    for (i = 0; i < 5; i++){
        let thisRound = playRound(getComputerChoice(), playerSelection);
        console.log(thisRound);
        if (thisRound.includes("win")){
            playerWins += 1;
        }
        if (thisRound.includes("lose")){
            computerWins += 1;
        }
    }
    if (playerWins > computerWins){
        return "You've won!";
    } else if (computerWins > playerWins){
        return "You've lost!";
    } else{
        return "The game is a tie.";
    }
}



let playerSelection = "scissors"
console.log(game())