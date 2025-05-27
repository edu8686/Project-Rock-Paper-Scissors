const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const score = document.querySelector("#score");
const matchResult = document.querySelector("#match-result");
const resetButton = document.querySelector("#reset");

let humanScore = 0;
let computerScore = 0;
let rounds = 1;

const parrafoRound = document.createElement("p");
const resultadoRound = document.createElement("p");
const resultadoAcum = document.createElement("p");
const resultadoMatch = document.createElement("p");

btnRock.addEventListener("click", (e) => {
  const eleccion = e.target.id;
  playRound(eleccion);
  rounds += 1;
});

btnPaper.addEventListener("click", (e) => {
  const eleccion = e.target.id;
  playRound(eleccion);
  rounds += 1;
});

btnScissors.addEventListener("click", (e) => {
  const eleccion = e.target.id;
  playRound(eleccion);
  rounds += 1;
});

resetButton.addEventListener('click', reset);

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

function playRound(humanChoice) {
  if(resetButton.classList.contains("hidden")) {
    resetButton.classList.remove("hidden");
  }
  const computerChoice = getComputerChoice();
  console.log("PlayRound ejecutada");
  console.log("Human choice: ", humanChoice);
  console.log("Computer choice: ", computerChoice);
  let mensaje = "";
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    humanScore += 1;
    mensaje = `You chose ${humanChoice}. Computer chose ${computerChoice}. You won!`;
  } else if (humanChoice === computerChoice) {
    mostrarResultados("Tie");
    console.log("It's a tie");
    mensaje = `You chose ${humanChoice}. Computer chose ${computerChoice}. It's a tie!`;
  } else {
    console.log("Computer wins!");
    computerScore += 1;
    mensaje = `You chose ${humanChoice}. Computer chose ${computerChoice}. Computer won!`;
  }
  return mostrarResultados(mensaje);
}

function mostrarResultados(resultado) {
  console.log("Resultado: ", resultado);
  console.log(humanScore);
  console.log(computerScore);
  console.log("Round: ", rounds);
  // roundResult.classList.remove("hidden");
  // score.classList.remove("hidden")
  parrafoRound.textContent = `Round: ${rounds}`;
  parrafoRound.style.fontSize = "1.5rem"
  resultadoRound.textContent = `Resultado: ${resultado}`;
  resultadoRound.style.fontSize = "1.5rem"
  resultadoAcum.textContent = `Your score: ${humanScore}. Computer's score: ${computerScore}.`;
  resultadoAcum.style.fontSize = "1.5rem"
  roundResult.appendChild(parrafoRound);
  roundResult.appendChild(resultadoRound);
  score.appendChild(resultadoAcum);
  resultadoMatch.style.fontSize = "1.5rem"
  if (humanScore === 5) {
    resultadoMatch.textContent = "You won the match!";
    matchResult.appendChild(resultadoMatch);
  } else if (computerScore === 5) {
    resultadoMatch.textContent = "You lost the match. Computer wins";
    matchResult.appendChild(resultadoMatch);
  }
}

function reset() {
  humanScore = 0;
  computerScore = 0;
  rounds = 0;
  parrafoRound.remove();
  resultadoRound.remove();
  resultadoAcum.remove();
  resultadoMatch.remove();
  resetButton.classList.add("hidden")
}

// if (humanScore > computerScore) {
//   return "You won the match!!";
// } else if (computerScore > humanScore) {
//   return "Computer wins!!";
// } else {
//   return "No one wins. It's a tie!!";
// }
