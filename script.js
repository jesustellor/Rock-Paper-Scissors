// psudo code to building a rock paper scissors game


// first i need to check how many people are playing if 1 vs pc or 1 v 1
// if 1 vs pc then the pc will be the computer
// if 1 vs 1 then the players will be player1 and player2 respectively
// player one and player 2 will have to pick from rock paper scissors
// the decision is then compared to see who wins.
// print out the winner

// This listener waits for the HTML elements to exist
document.addEventListener("DOMContentLoaded", () => {
    const gameForm = document.getElementById("form");
    const checkContainer = document.getElementById("question");
    console.log(gameForm);
    // Add a safety check to ensure gameForm was actually found
    if (gameForm) {
        gameForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const vsPC = document.getElementById("checkbox1");
            const vsPlayer = document.getElementById("checkbox2");

            const gameOn = document.getElementById("game");

            const player1Choice = document.getElementById("player1-choice");
            const player2Choice = document.getElementById("player2-choice");
            const computerChoice = document.getElementById("computer-choice");
            const resultText = document.getElementById("result-text");

            if (vsPC.checked || vsPlayer.checked) {
                console.log("Game mode activated");
                checkContainer.hidden = true;
                gameOn.hidden = false;
                  if(vsPC.checked){
                    console.log("vs PC");
                    gameOn.children[1].hidden = false;
                    let player1Choice = game.addEventListener("click", () => {
                        let choice = event
                        console.log(choice);
                    })

                  }else if(vsPlayer.checked){
                    console.log("vs Player");
                  }
                
            } else {
                console.log("Please select a game mode first.");
            }
        });
    } else {
        console.log("Game form not found.");
    }
});
