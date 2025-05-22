function getComputerChoice() {
  let randomNum = 4;
  while (randomNum > 2) {
    randomNum = Math.floor(Math.random() * 10);
  }
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let eleccion = prompt(
    "Input your choice: rock, paper o scissors"
  ).toLowerCase();
  return eleccion;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
    } else if (humanChoice === computerChoice) {
    } else {
      computerScore += 1;
    }
  }

  for (let i = 1; i <=  5; i++) {
    const humanSelection = getHumanChoice();
    console.log(`Ronda ${i}: ${humanSelection}`)
    const computerSelection = getComputerChoice();
    console.log(`Ronda ${i}: ${computerSelection}`)
    playRound(humanSelection, computerSelection)
    console.log(humanScore);
    console.log(computerScore)
  }

  if(humanScore > computerScore) {
    return "You won the match!!"
  } else if (computerScore > humanScore) {
    return "Computer wins!!"
  } else {
    return "No one wins. It's a tie!!"
  }

}



let x = playGame()

console.log(x);
