

const playerSelection = '';
const computerSelection = computerPlay();
const userScore = 0;
const computerScore = 0;




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

//Play round

function playRound(playerSelection, computerSelection) {
    
    
    playerSelection = playerSelection.toLowerCase();

    if ( (playerSelection === 'rock' && computerSelection === 'rock') ||
         (playerSelection === 'paper' && computerSelection === 'paper') ||
         (playerSelection === 'scissors' && computerSelection === 'scissors')
     ) {
        return 'It\'s a tie!';
    } 
    
    if   (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win, paper beats rock!';
        }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            
            return 'You win, scissors beats paper!'  
         } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return 'You win, rock beats scissors!'
            }
       

    if  (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose, paper loses to scissors';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
             return 'You lose, scissors loses to rock';
         }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
         {
             return 'You lose, rock loses to paper'
         }
}


