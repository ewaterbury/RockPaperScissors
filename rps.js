


  
  
  
  function getComputerChoice(rps) {
    const random = Math.floor(Math.random() * rps.length);
    const finalChoice = rps[random];
    return finalChoice;
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {return `Tie! You both picked ${playerSelection}!`;}
    else if (playerSelection === "rock" && computerSelection === "paper") {return "You lose! Paper beats rock";}
    else if (playerSelection === "rock" && computerSelection === "scissors") {return "You win! Rock beats scissors";}
    else if (playerSelection === "paper" && computerSelection === "rock") {return "You win! Paper beats Rock";}
    else if (playerSelection === "paper" && computerSelection === "scissors") {return "You lose! Scissors beats paper";}
    else if (playerSelection === "scissors" && computerSelection === "rock") {return "You lose! Rock beats scissors";}
    else if (playerSelection === "scissors" && computerSelection === "paper") {return "You win! Scissors beats paper";}
  }



function game() {
  const computerChoice = ["rock", "paper", "scissors"];
  for (let i = 0; i < 5; i++) {
      const computerSelection = getComputerChoice(computerChoice);
  let playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();      
  console.log(playRound(playerSelection, computerSelection));}}

game()