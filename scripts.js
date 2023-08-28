let playerScore = 0;
let computerScore = 0;


//5-Round Game

function game() {

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

//Computer makes random choice

    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomChoice = choices[Math.floor(Math.random() * 3)];
    
        return randomChoice;
    }

//Get player choice via prompt

    function getPlayerChoice() {
        const answer = prompt('Choose Rock, Paper, or Scissors:',);
    
        return answer.charAt(0).toUpperCase()
            + answer.slice(1).toLowerCase();
    }

//1 round player vs. computer scored

    function playRound(playerSelection, computerSelection) {

        if ((playerSelection === 'Rock' && computerSelection === 'Scissors')
            || (playerSelection === 'Paper' && computerSelection === 'Rock')
            || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    
            playerScore++;
            return `You win! The score is You: ${playerScore} - Computer: ${computerScore}.`
        }
    
        else if (playerSelection === computerSelection) {
            
            return 'It\'s a tie - clash again!'
        }
    
        else {
            
            computerScore++;
            return `You lose. The score is You: ${playerScore} - Computer: ${computerScore}.`
        }
    }

//Round 1

    console.log(`You chose ${playerSelection}.`);
    console.log(`Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));

//Round 2

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    console.log(`You chose ${playerSelection}.`);
    console.log(`Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));

//Round 3

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    console.log(`You chose ${playerSelection}.`);
    console.log(`Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));

//Round 4

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    console.log(`You chose ${playerSelection}.`);
    console.log(`Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));

//Round 5

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    console.log(`You chose ${playerSelection}.`);
    console.log(`Computer chose ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));
}

game()
console.log(`Final Score is You: ${playerScore} - Computer: ${computerScore}.`)