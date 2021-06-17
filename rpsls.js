let userScore = 1;
let computerScore = 1;

const body = document.querySelector('body');
const h3 = document.querySelector('h3');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');
const playerPoints = document.getElementById('player-points');
const computerPoints = document.getElementById('computer-points');
const options = document.querySelector('.rpsls');
const button = document.createElement('button');
button.textContent = 'Play Again';
button.addEventListener('click',() => location.reload());


// COMPUTER SELECTION FUNCTION

function computerPlay () {
    let randomNumber = Math.floor(Math.random()*100) +1;
        if (randomNumber <= 20) {
            return 'rock';
        } else if (randomNumber > 20 && randomNumber <= 40) {
            return 'paper';
        } else if (randomNumber > 40 && randomNumber <= 60){
            return 'scissors';
        } else if (randomNumber > 60 && randomNumber <= 80) {
            return 'lizard';
        } else if (randomNumber > 80 && randomNumber <= 100) {
            return 'spock';
        }
}

// Event listeners for player selection

rock.addEventListener('click', () => {
    playRound('rock');
})
paper.addEventListener('click', () => {
    playRound('paper');
})
scissors.addEventListener('click', () => {
    playRound('scissors');
})
lizard.addEventListener('click', () => {
    playRound('lizard');
})
spock.addEventListener('click', () => {
    playRound('spock');
})


// GAME LOGIC 

function playRound(playerSelection) {
     let computerSelection = computerPlay();

     // TIE
        if (playerSelection === computerSelection) {
            h3.textContent = 'It\s a tie!';

    //WINNING CHOICES

            // player - rock, computer - scissors
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            h3.textContent = 'You WIN, rock crushes scissors!';
            playerPoints.textContent = 'You: ' + userScore++;
            // player - rock, computer - lizard
        } else if (playerSelection === 'rock' && computerSelection === 'lizard') {
            h3.textContent = 'You WIN, rock crushes lizard!';
            playerPoints.textContent = 'You: ' + userScore++;
            // player - paper, computer - rock
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            h3.textContent = 'You WIN, paper covers rock!';
            playerPoints.textContent = 'You: ' + userScore++;
            // player - paper, computer - spock
        } else if (playerSelection === 'paper' && computerSelection === 'spock') {
            h3.textContent = 'You WIN, paper disproves Spock!';
            playerPoints.textContent = 'You: ' + userScore++;
            // player - scissors, computer - paper
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            h3.textContent = 'You WIN, scissors cuts paper!';
            playerPoints.textContent = 'You: ' + userScore++;
            // player - scissors, computer - lizard
        } else if (playerSelection === 'scissors' && computerSelection === 'lizard') {
            h3.textContent = 'You WIN, scissors decapitates lizard!';
            playerPoints.textContent = 'You: ' + userScore++;
            // player - lizard, computer - paper
        } else if (playerSelection === 'lizard' && computerSelection === 'paper') {
            h3.textContent = 'You WIN, lizard eats paper!';
            playerPoints.textContent = 'You: ' + userScore++;
            //player - lizard, computer - spock
        } else if (playerSelection === 'lizard' && computerSelection === 'spock') {
            h3.textContent = 'You WIN, lizard poisons Spock!';
            playerPoints.textContent = 'You: ' + userScore++;
            //player - spock, computer - scissors
        } else if (playerSelection === 'spock' && computerSelection === 'scissors') {
            h3.textContent = 'You WIN, Spock smashes scissors!';
            playerPoints.textContent = 'You: ' + userScore++;
            // player - spock, computer - rock
        } else if (playerSelection === 'spock' && computerSelection === 'rock') {
            h3.textContent = 'You WIN, Spock vaporizes rock!';
            playerPoints.textContent = 'You: ' + userScore++;
        
    // LOSING CHOICES
        
            // player - rock, computer - paper
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            h3.textContent = 'You lose, paper covers rock.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
            //player - rock, computer - spock
        } else if (playerSelection === 'rock' && computerSelection === 'spock') {
            h3.textContent = 'You lose, Spock vaporizes rock.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
            //player - paper, computer - scissors
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            h3.textContent = 'You lose, scissors cuts paper.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
            //player - paper, computer - lizard
        } else if (playerSelection === 'paper' && computerSelection === 'lizard') {
            h3.textContent = 'You lose, lizard eats paper.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
            // player - scissors, computer - rock
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            h3.textContent = 'You lose, rock crushes scissors.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
            //player - scissors, computer - spock
        } else if (playerSelection === 'scissors' && computerSelection === 'spock') {
            h3.textContent = 'You lose, Spock smashes scissors.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
            //player - lizard, computer - scissors
        } else if (playerSelection === 'lizard' && computerSelection === 'scissors') {
            h3.textContent = 'You lose, scissors decapitates lizard.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
            //player - lizard, computer - rock
        } else if (playerSelection === 'lizard' && computerSelection === 'rock') {
            h3.textContent = 'You lose, rock crushes lizard.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
            //player - spock, computer - paper
        } else if (playerSelection === 'spock' && computerSelection === 'paper') {
            h3.textContent = 'You lose, paper disproves Spock.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
            //play - spock, computer - lizard
        } else if (playerSelection === 'spock' && computerSelection === 'lizard') {
            h3.textContent = 'You lose, lizard poisons Spock.';
            computerPoints.textContent = 'Sheldon:  ' + computerScore++;
        }

        getWinner();
}




   function getWinner() {
       if (userScore === 6 || computerScore === 6) {
           if (userScore === 6) {
               playerPoints.remove();
               computerPoints.remove();
               options.remove();
               h3.textContent = 'YOU WON THE GAME! :D'
               body.appendChild(button);
           } else if (computerScore === 6) {
                playerPoints.remove();
                computerPoints.remove();
                options.remove();
                h3.textContent = 'YOU LOST THE GAME :('
                body.appendChild(button);
            }
       }
   }









    //     if (userScore === 6) {
    //         h3.textContent = 'YOU WON THE GAME!';
    //         userScore = 0;
    //         computerScore = 0;
    //         playerPoints.textContent = 'You: ' + computerScore;
    //         computerPoints.textContent = 'Sheldon: ' + computerScore;
    //     } else if (computerScore === 6) {
    //         h3.textContent = 'YOU LOST THE GAME!';
    //         userScore = 0;
    //         computerScore = 0;
    //         playerPoints.textContent = 'You: ' + computerScore;
    //         computerPoints.textContent = 'Sheldon: ' + computerScore;
    //     }
    // }
