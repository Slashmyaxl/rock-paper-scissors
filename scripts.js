function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = choices[Math.floor(Math.random() * 3)];

    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt('Choose Rock, Paper, or Scissors:',);

    return playerSelection.charAt(0).toUpperCase()
        + playerSelection.slice(1).toLowerCase();
}