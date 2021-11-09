// Declaring function that gets the users choice. return userInput
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Invalid Choice.')
  }
}
// Testing function
// console.log(getUSerChoice("scissors"));

// function that gets computer choice. return cmpChoice
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3)
  if (x === 0) {
    let cmpChoice = 'rock';
    return cmpChoice;
  } else if (x === 1) {
    let cmpChoice = 'paper';
    return cmpChoice;
  } else {
    let cmpChoice = 'scissors';
    return cmpChoice;
  }
}
// Testing function
// console.log(getComputerChoice())

// determines winner. return winner
function determineWinner(userChoice=userInput, computerChoice=cmpChoice) {
  if (userChoice === 'bomb') {
    let winner = "BOOM user Wins!";
    return winner;
  }
  if (userChoice === computerChoice) {
    let winner = 'Its a tie!';
    return winner;
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      let winner = 'User Wins!';
      return winner;
    } else {
      let winner = 'Computer Wins!';
      return winner;
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      let winner = 'User Wins!';
      return winner;
    } else {
      let winner = 'Computer Wins!';
      return winner;
    }
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      let winner = 'User Wins!';
      return winner;
    } else {
      let winner = 'Computer Wins!';
      return winner;
    }
  }
}
// Testing Function
// console.log(determineWinner('scissors', 'paper'))

function playGame() {
  let userChoice = getUserChoice('paper');
  console.log(userChoice);
  let computerChoice = getComputerChoice(); 
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
