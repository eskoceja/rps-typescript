const game = (): void => {
    const userChoiceDisplay = document.getElementById("user-choice")!;
    const computerChoiceDisplay = document.getElementById("computer-choice")!;
    const resultDisplay = document.getElementById("result")!;
    const possibleChoices = document.querySelectorAll("button");
    let userChoice: string;
    let computerChoice: string;
    let result: string;
  
    possibleChoices.forEach((possibleChoice) =>
      possibleChoice.addEventListener("click", (e: MouseEvent) => {
        userChoice = (e.target as HTMLButtonElement).id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        playGame();
      })
    );
  
    const generateComputerChoice = (): void => {
      const randomChoice = Math.floor(Math.random() * possibleChoices.length) + 1;
  
      if (randomChoice === 1) {
        computerChoice = "ROCK";
      } else if (randomChoice === 2) {
        computerChoice = "PAPER";
      } else if (randomChoice === 3) {
        computerChoice = "SCISSORS";
      }
  
      computerChoiceDisplay.innerHTML = computerChoice;
    };
  
    const playGame = (): void => {
      if (userChoice === "ROCK") {
        if (computerChoice === "PAPER") {
          result = "Computer wins!";
          console.log(
            `Computer Choice wins with paper against You who played rock.`
          );
        } else if (computerChoice === "SCISSORS") {
          result = "You win!";
          console.log(
            `You win with rock against the Computer Choice who played scissors.`
          );
        } else {
          result = "It's a tie with rocks!";
          console.log(
            `It's a tie between You and the Computer Choice with rocks!`
          );
        }
      } else if (userChoice === "PAPER") {
        if (computerChoice === "ROCK") {
          result = "You win!";
          console.log(
            `You win with paper against the Compute Choice who played rock.`
          );
        } else if (computerChoice === "SCISSORS") {
          result = "Computer wins!";
          console.log(
            `Computer Choice wins with scissors against You who played paper.`
          );
        } else {
          result = "It's a tie with paper!";
          console.log(
            `It's a tie between You and the Computer Choice with paper!`
          );
        }
      } else if (userChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
          result = "Computer wins!";
          console.log(
            `Computer Choice wins with rock against You who played scissors.`
          );
        } else if (computerChoice === "PAPER") {
          result = "You win!";
          console.log(
            `You win with scissors against the Computer Choice who played paper.`
          );
        } else {
          result = "It's a tie with scissors!";
          console.log(
            `It's a tie between You and the Computer Choice with scissors!`
          );
        }
      }
  
      resultDisplay.innerHTML = result;
    };
  };
  
  game();
  