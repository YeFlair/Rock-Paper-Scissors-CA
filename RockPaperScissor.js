const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
      return userInput
    } else {
      return "Error"
    }
  }
  
  const getComputerChoice = () => {
    number = Math.floor(Math.random() * 3)
    switch(number){
      case 0:
        return "rock"
        break;
      case 1: 
        return "paper"
        break;
      case 2: 
        return "scissor"
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "rock" && computerChoice == "paper"){
      return `User: ${userChoice} vs Computer: ${computerChoice}\nWinner: Computer`
    } else if (userChoice === "paper" && computerChoice == "rock"){
      return `User: ${userChoice} vs Computer: ${computerChoice}\nWinner: User`
    } else if (userChoice === "rock" && computerChoice === "scissor"){
      return `User: ${userChoice} vs Computer: ${computerChoice}\nWinner: User`
    } else if (userChoice === "scissor" && computerChoice === "rock"){
      return `User: ${userChoice} vs Computer: ${computerChoice}\nWinner: Computer`
    } else if (userChoice === "paper" && computerChoice === "scissor"){
      return `User: ${userChoice} vs Computer: ${computerChoice}\nWinner: Computer`
    } else if (userChoice === "scissor" && computerChoice === "paper"){
      return `User: ${userChoice} vs Computer: ${computerChoice}\nWinner: User`
    } else {
      return "Tie"
    }
  }
  
  const playGame = (userChoice = getUserChoice('rock','paper',"scissor"), computerChoice=getComputerChoice()) => {
    console.log(determineWinner(userChoice,computerChoice))
  }
  
  playGame()