

function getComputerChoice(){
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let randomNumber = Math.floor(Math.random()*arr.length);
    let randomElem = arr[randomNumber];
    return randomElem;
}

let computerChoice = getComputerChoice()

function getPlayerInput(){
    let answer = prompt("Choose between rock, paper, scissors:")
    return answer
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "PAPER"){
        console.log("You lose! Paper beats rock");
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "PAPER"){
        console.log("You win! Scissors beats paper");
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection==="ROCK"){
        console.log("You win! Paper beats rock");
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection==="ROCK"){
        console.log("You lose! Rock beats scissors");
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection==="SCISSORS"){
        console.log("You lose! Scissors beats paper");
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection==="SCISSORS"){
        console.log("You win! Rock beats scissors");
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log("It's a draw!");
    }
}

let playerSelection = getPlayerInput()

playRound(playerSelection, computerChoice)
