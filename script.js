let choieces = document.querySelectorAll(".choice");

let msg = document.querySelector("#result");

let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");

let userMove=document.querySelector("#userMove");
let compMove=document.querySelector("#compMove");

let uScore = 0;
let cScore = 0;

const userScoreBoard = (uScore) => {
  userScore.textContent = uScore;
};
const compScoreBorad = (cScore) => {
  compScore.textContent = cScore;
};

choieces.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});

const generateCompChoice = () => {
  choiceOptions = ["rock", "paper", "scissor"];
  let randIndex = Math.floor(Math.random() * 3);
  let compChoice = choiceOptions[randIndex];
  console.log(compChoice);
  return compChoice;
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    console.log("you win !");
    msg.textContent = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    uScore++;
    userScoreBoard(uScore);
  } else {
    console.log("you Lose .");
    msg.textContent = `You Lose ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    cScore++;
    compScoreBorad(cScore);
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);
  let compChoice = generateCompChoice();

showMove(userChoice,compChoice);

  if (userChoice === compChoice) {
    console.log("math was draw !");
    msg.textContent = "match was draw";
    msg.style.backgroundColor = "rgb(3, 3, 58)";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //com=paper ,scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //comp- rock , scissor
      userWin = compChoice === "rock" ? true : false;
    } else {
      //comp-rock,paper
      userWin = compChoice == "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

const showMove=(userChoice,compChoice)=>{
    userMove.textContent=userChoice;
    compMove.textContent=compChoice;

}