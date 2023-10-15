
function getComputerChoice(){
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let randomNumber = Math.floor(Math.random()*arr.length);
    let randomElem = arr[randomNumber];
    return randomElem;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "PAPER"){
        return "You lose! Paper beats rock"
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "PAPER"){
        return "You win! Scissors beats paper"
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection=="ROCK"){
        return "You win! Paper beats rock"
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection=="ROCK"){
        return  "You lose! Rock beats scissors"
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection=="SCISSORS"){
        return "You lose! Scissors beats paper"
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection=="SCISSORS"){
        return "You win! Rock beats scissors"
    }
    else if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "It's a draw!"
    }
}


const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let round = 1;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id.toUpperCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
    
        let resultElement = document.createElement('p');
        resultElement.textContent = `Round ${round}: ${result}`;
        results.appendChild(resultElement);
    
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    
        let scoreElement = document.createElement('p');
        scoreElement.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
        results.appendChild(scoreElement);
    
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                let winnerElement = document.createElement('p');
                winnerElement.textContent = "Player wins!";
                results.appendChild(winnerElement);
            } else if (computerScore > playerScore) {
                let winnerElement = document.createElement('p');
                winnerElement.textContent = "Computer wins!";
                results.appendChild(winnerElement);
            } else {
                let drawElement = document.createElement('p');
                drawElement.textContent = "It's a draw!";
                results.appendChild(drawElement);
            }
            playerScore = 0;
            computerScore = 0;
            round = 0;
        }
    
        round++;
    });
});
