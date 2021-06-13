


let userScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

console.log('Type "game()" and press enter to begin. Refresh to play again.')

// Get Computers Choice
function computerPlay () {
    let randomNumber = Math.floor(Math.random()*100);
        if (randomNumber <= 33) {
            return 'rock';
        } else if (randomNumber > 33 && randomNumber <= 66) {
            return 'paper';
        } else {
            return 'scissors';
        }
}

//GAME LOGIC

function playRound(playerSelection) {

    
    let computerSelection = computerPlay();

     // TIE
    if ( (playerSelection === 'rock' && computerSelection === 'rock') ||
         (playerSelection === 'paper' && computerSelection === 'paper') ||
         (playerSelection === 'scissors' && computerSelection === 'scissors')
     ) {
        return 'It\'s a tie!';
    } 
    // WIN
    if   (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++;
        return 'You win, paper beats rock!';
        }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            userScore++;
            return 'You win, scissors beats paper!'  
         } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            userScore++;
            return 'You win, rock beats scissors!'
            }
       
    // LOSE
    if  (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'You lose, paper loses to scissors';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++
             return 'You lose, scissors loses to rock';
         }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++
            return 'You lose, rock loses to paper.'
         }
}

function oneGame() {
    let playGame = prompt('Rock, paper or scissors?').toLowerCase();
    if (playGame === 'rock') {
        return playRound('rock')
    } else if (playGame === 'paper') {
        return playRound('paper');
    } else if (playGame === 'scissors') {
        return playRound('scissors');
    } else prompt('Please enter a valid option!');
}

function game() {
    while (userScore < 5 && computerScore < 5) {
    console.log(oneGame())
    console.log (`You: ${userScore} Computer: ${computerScore}`)
    if (userScore === 5) {
        console.log('YOU WON THE GAME!');
    } else if (computerScore === 5) {
        console.log('YOU LOST THE GAME!')
    }
  }
}

