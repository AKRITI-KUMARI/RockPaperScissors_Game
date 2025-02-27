let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector(".resetBtn");

const drawGame = () => {
    msg.innerText = "Game Draw!"
    msg.style.color = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.color = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.color = "red";
    }
}

const generateChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let ramdomIndex = Math.floor(Math.random()*3);
    return options[ramdomIndex];
}

const playGame = (userChoice) => {
    const compChoice = generateChoice();
    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock")
        {
            userWin = (compChoice == "paper")? false : true;
        } 
        else if(userChoice == "paper")
        {
            userWin = (compChoice == "rock")? true : false;
        }
        else
        {
            userWin = (compChoice == "paper")? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    msg.innerText = "New game begins";
    msg.style.color = "#081b31";
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
})