// first i need to check how many people are playing if 1 vs pc or 1 v 1
// create all necessary variables, computer choice, player 1 choice, player 2 choice
// if 1 vs pc only ask for player 1 choice.
// if 1 vs 1 ask for player 1 and player 2 choices.
// player one and player 2 will have to pick from rock paper scissors
// the decision is then compared to see who wins.
// print out the winner

/*  */

document.addEventListener("DOMContentLoaded", () => {
    const gameForm = document.getElementById("form");
    const gameInit = document.getElementById("game");
    const questionContainer = document.getElementById("question");
   
    // Add a safety check to ensure gameForm was actually found
    if (gameForm) {
        
        gameForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const vsPC = document.getElementById("checkbox1");
            const vsPlayer = document.getElementById("checkbox2");



            if (vsPC.checked || vsPlayer.checked) {
                console.log("Game mode activated");
                questionContainer.hidden = true;
                gameInit.hidden = false;
                  if(vsPC.checked){
                    console.log("vs PC");

                    pcGame();

                  }else if(vsPlayer.checked){
                    console.log("vs Player");
                  }
                
            } else {
                console.log("Please select a game mode first.");
            }
        });

// 0 = rock, 1 = paper, 2 = scissors 
            let player1Score = document.getElementById("player1-score");
            let player2Score = document.getElementById("player2-score");

            player1Score.innerHTML = 0;
            player2Score.innerHTML = 0; 

        let pcGame = function(){
            gameInit.addEventListener("click", (event) => {
            let computerChoice = Math.floor(Math.random() * 3);


            event.preventDefault();
            console.log(event.target.value);
            console.log(computerChoice);

            if(event.target.value == "Rock" && computerChoice == 1){
                console.log("Player 2 wins");
                player2Score.innerHTML++;
            } else if(event.target.value == "Paper" && computerChoice == 2){
                console.log("Player 2 wins");
                player2Score.innerHTML++;
            } else if(event.target.value == "Scissors" && computerChoice == 0){
                console.log("Player 2 wins");
                player2Score.innerHTML++;
            } else if(event.target.value == "Rock" && computerChoice == 2){
                console.log("Player 1 wins");
                player1Score.innerHTML++;
            } else if(event.target.value == "Paper" && computerChoice == 0){
                console.log("Player 1 wins");
                player1Score.innerHTML++;
            } else if(event.target.value == "Scissors" && computerChoice == 1){
                console.log("Player 1 wins");
                player1Score.innerHTML++;
            } else{
                console.log("Draw");
            } 
        });

        }



    } else {
        console.log("Game form not found.");
    }
});
