function getComputerChoice() {
    const rndInt = Math.floor(Math.random() * 3);
    let options = ["Rock", "Paper", "Scissors"];
    return options[rndInt];
}

function playRound(e) {
    if (playerTracker.textContent == 3 || computerTracker.textContent == 3){
        return;
    }

    let debug = false;
    let playerSelection = e.target.innerText;
    let computerSelection = getComputerChoice();;

    let playerWins = roundWinner(playerSelection, computerSelection);
    let computerWins = roundWinner(computerSelection, playerSelection);

    if (playerWins){
        textDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        incTracker(playerTracker);
    }
    if (computerWins){
        textDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        incTracker(computerTracker);
    }
    if (!(playerWins || computerWins)){
        textDisplay.textContent = `It's a tie.`;
    }
    // if either tracker value is 3 , declare winner. then prompt to play again
    if (playerTracker.textContent == 3 || computerTracker.textContent == 3){
        newGame.classList.add('show');
        newGame.addEventListener('click', () => {
            playerTracker.textContent = 0;
            computerTracker.textContent = 0;
            newGame.classList.remove('show');
        });
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

function incTracker(tracker) {
    let text = tracker.textContent;
    let number = parseInt(text, 10);
    tracker.value = number + 1;
    tracker.textContent = tracker.value;
}

const div = document.querySelector('.container');
const buttons = document.createElement('div')
buttons.classList.add('row');

const newGame = document.createElement('button');
newGame.classList.add('newGame');
newGame.textContent = "Play Again?";

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

const display = document.createElement('div');
const playerTracker = document.createElement('div');
const textDisplay = document.createElement('div');
const computerTracker = document.createElement('div');
playerTracker.textContent = 0;
computerTracker.textContent = 0;

display.classList.add('display');
playerTracker.classList.add('tracker');
textDisplay.classList.add('write');
computerTracker.classList.add('tracker');


rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);

div.appendChild(newGame);
display.appendChild(playerTracker);
display.appendChild(textDisplay);
display.appendChild(computerTracker);
div.appendChild(display);
buttons.appendChild(rockBtn);
buttons.appendChild(paperBtn);
buttons.appendChild(scissorsBtn);
div.appendChild(buttons);


// function game() {
//     playerWins = 0;
//     computerWins = 0;
//     for (i = 0; i < 5; i++){
//         let thisRound = playRound(getComputerChoice(), playerSelection);
//         console.log(thisRound);
//         if (thisRound.includes("win")){
//             playerWins += 1;
//         }
//         if (thisRound.includes("lose")){
//             computerWins += 1;
//         }
//     }
//     if (playerWins > computerWins){
//         return "You've won!";
//     } else if (computerWins > playerWins){
//         return "You've lost!";
//     } else{
//         return "The game is a tie.";
//     }
// }

// console.log(game())