// first i need to check how many people are playing if 1 vs pc or 1 v 1
// create all necessary variables, computer choice, player 1 choice, player 2 choice
// if 1 vs pc only ask for player 1 choice.
// if 1 vs 1 ask for player 1 and player 2 choices.
// player one and player 2 will have to pick from rock paper scissors
// the decision is then compared to see who wins.
// print out the winner

/*  */
document.addEventListener("DOMContentLoaded", () => {
    const checkContainer = document.getElementById("question");
    const gameForm = document.getElementById("form");
    const gameOn = document.getElementById("game");
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
   
    // Add a safety check to ensure gameForm was actually found
    if (gameForm) {


        let pcGame = function(){
            gameOn.addEventListener("click", (event) => {
            event.preventDefault();
            if(event.target.value){
                const player1Choice = event.target.value;

                console.log(player1Choice);
            }
        });

        }


        gameForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const vsPC = document.getElementById("checkbox1");
            const vsPlayer = document.getElementById("checkbox2");



            if (vsPC.checked || vsPlayer.checked) {
                console.log("Game mode activated");
                checkContainer.hidden = true;
                gameOn.hidden = false;
                  if(vsPC.checked){
                    console.log("vs PC");

                    gameOn.children[1].hidden = false;
                    pcGame();

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
