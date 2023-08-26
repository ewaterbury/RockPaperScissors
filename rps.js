//document.addEventListener("click", getUserChoice)
//document.addEventListener("click", getCompChoice)
function getUserChoice(e){
  let userChoice = e.target.id;
  console.log(`You:${userChoice}`);
  return userChoice;
};

function getCompChoice() {
  let compChoice = ["rock", "paper", "scissors"]
  let random = Math.floor(Math.random() * compChoice.length);
  compChoice = compChoice[random];
  console.log(`Computer:${compChoice}`);
  return compChoice;
}

function playRound(userChoice, compChoice) {
  let winner = 'balls';
  if (userChoice === compChoice) {return `Tie! You both picked ${userChoice}!`;}
  else if (userChoice === "rock" && compChoice === "paper") {return "You lose! Paper beats rock";}
  else if (userChoice === "rock" && compChoice === "scissors") {return "You win! Rock beats scissors";}
  else if (userChoice === "paper" && compChoice === "rock") {return "You win! Paper beats Rock";}
  else if (userChoice === "paper" && compChoice === "scissors") {return "You lose! Scissors beats paper";}
  else if (userChoice === "scissors" && compChoice === "rock") {return "You lose! Rock beats scissors";}
  else if (userChoice === "scissors" && compChoice === "paper") {return "You win! Scissors beats paper";}
  }

function letsPlay(e){
  let userChoice = getUserChoice(e);
  let compChoice = getCompChoice(e);
  console.log(playRound(userChoice, compChoice));
}
document.addEventListener("click", letsPlay)





  function game() {
  const computerChoice = ["rock", "paper", "scissors"];
  for (let i = 0; i < 5; i++) {
      const computerSelection = getCompChoice(compChoice);
  let playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();      
  console.log(playRound(playerSelection, computerSelection));}}
