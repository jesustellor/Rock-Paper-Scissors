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
    const checkContainer = document.getElementById("container");
    // Add a safety check to ensure gameForm was actually found
    if (gameForm) {
        gameForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const vsPC = document.getElementById("checkbox1");
            const vsPlayer = document.getElementById("checkbox2");

            if (vsPC.checked) {
                console.log("1 vs PC mode activated");
                checkContainer.hidden = true;
            } else if (vsPlayer.checked) {
                console.log("1 vs 1 mode activated");
            } else {
                console.log("Please select a game mode first.");
            }
        });
    }
});
