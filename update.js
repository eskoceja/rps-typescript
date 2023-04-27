var game = function () {
    var userChoiceDisplay = document.getElementById("user-choice");
    var computerChoiceDisplay = document.getElementById("computer-choice");
    var resultDisplay = document.getElementById("result");
    var possibleChoices = document.querySelectorAll("button");
    var userChoice;
    var computerChoice;
    var result;
    possibleChoices.forEach(function (possibleChoice) {
        return possibleChoice.addEventListener("click", function (e) {
            userChoice = e.target.id;
            userChoiceDisplay.innerHTML = userChoice;
            generateComputerChoice();
            playGame();
        });
    });
    var generateComputerChoice = function () {
        var randomChoice = Math.floor(Math.random() * possibleChoices.length) + 1;
        if (randomChoice === 1) {
            computerChoice = "ROCK";
        }
        else if (randomChoice === 2) {
            computerChoice = "PAPER";
        }
        else if (randomChoice === 3) {
            computerChoice = "SCISSORS";
        }
        computerChoiceDisplay.innerHTML = computerChoice;
    };
    var playGame = function () {
        if (userChoice === "ROCK") {
            if (computerChoice === "PAPER") {
                result = "Computer wins!";
                console.log("Computer Choice wins with paper against You who played rock.");
            }
            else if (computerChoice === "SCISSORS") {
                result = "You win!";
                console.log("You win with rock against the Computer Choice who played scissors.");
            }
            else {
                result = "It's a tie with rocks!";
                console.log("It's a tie between You and the Computer Choice with rocks!");
            }
        }
        else if (userChoice === "PAPER") {
            if (computerChoice === "ROCK") {
                result = "You win!";
                console.log("You win with paper against the Compute Choice who played rock.");
            }
            else if (computerChoice === "SCISSORS") {
                result = "Computer wins!";
                console.log("Computer Choice wins with scissors against You who played paper.");
            }
            else {
                result = "It's a tie with paper!";
                console.log("It's a tie between You and the Computer Choice with paper!");
            }
        }
        else if (userChoice === "SCISSORS") {
            if (computerChoice === "ROCK") {
                result = "Computer wins!";
                console.log("Computer Choice wins with rock against You who played scissors.");
            }
            else if (computerChoice === "PAPER") {
                result = "You win!";
                console.log("You win with scissors against the Computer Choice who played paper.");
            }
            else {
                result = "It's a tie with scissors!";
                console.log("It's a tie between You and the Computer Choice with scissors!");
            }
        }
        resultDisplay.innerHTML = result;
    };
};
game();
