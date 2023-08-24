function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerSelection = choices[Math.floor(Math.random() * 3)];

    return computerSelection;
}