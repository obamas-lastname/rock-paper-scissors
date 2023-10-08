
function getComputerChoice(){
    let arr = ["ROCK", "PAPER", "SCISSORS"];
    let randomNumber = Math.floor(Math.random()*arr.length);
    let randomElem = arr[randomNumber];
    return randomElem;
}



function getPlayerInput(){
    let answer = prompt("Choose between rock, paper, scissors:")
    return answer
}

function playRound(playerSelection, computerSelection){
    let win=0;
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "PAPER"){
        console.log("You lose! Paper beats rock");
        win=1;
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "PAPER"){
        console.log("You win! Scissors beats paper");
        win=2;
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection==="ROCK"){
        console.log("You win! Paper beats rock");
        win=2;
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection==="ROCK"){
        console.log("You lose! Rock beats scissors");
        win=1;
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection==="SCISSORS"){
        console.log("You lose! Scissors beats paper");
        win=1;
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection==="SCISSORS"){
        console.log("You win! Rock beats scissors");
        win=2;
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log("It's a draw!");
        win=0;
    }
    return win;
}




function game(){
    let i=1, playerScore=0, computerScore=0;
    
    while(i<=5){
        let a = getPlayerInput();
        let b = getComputerChoice();
        let c= playRound(a, b);
        if(c===2) playerScore++;
        else if (c===1) computerScore++;
        i++;
    }

     if(playerScore>computerScore) console.log("You win!");
     else console.log("You lose!");
}

game();
