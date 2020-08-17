const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //start the game
   const startGame = () => {
       const playBtn = document.querySelector('.intro button');
       const introScreen = document.querySelector('.intro');
       const match = document.querySelector('.match');

       playBtn.addEventListener('click', () => {
           introScreen.classList.add("fadeOut");
           match.classList.add("fadeIn");
       });
   };

   //play match
   const playMatch = () => {
       const options = document.querySelectorAll('.options button');
       const playerHand = document.querySelector('.player-hand');
       const computerHand = document.querySelector('.computer-hand');
       //computer options
       const computerOptions = ['rock', 'paper', 'scissors'];

       options.forEach(option => {
           option.addEventListener('click', function() {
               //computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            //here is where we call compare hands


            //update images
            playerHand.src = `./images/${this.textContent}.png`;
            computerHand.src = `./images/${computerChoice}.png`;
           });
       });       
   };

    const compareHands =  (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if(playerChoice === playerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //check for rock
        if (playerChoice === 'rock'){
            if (computerChoice === "scisors") {
                winner.textContent = 'Player wins';
                return;
            } else {
                winner.textContent = 'Computer wins';
                return;
            }
        }
        //check for paper
        if (playerChoice === 'paper'){
            if (computerChoice === "scisors") {
                winner.textContent = 'Computer wins';
                return;
            } else {
                winner.textContent = 'Player wins';
                return;
            }
        }
        //check for scissors
        if (playerChoice === 'scissors'){
            if (computerChoice === "rock") {
                winner.textContent = 'Computer wins';
                return;
            } else {
                winner.textContent = 'Player wins';
                return;
            }
        }
    }   
   //we need to execute function, call inner function
   startGame();
   playMatch();
};

//start the game function, this is where you execute the 'big' function
game();