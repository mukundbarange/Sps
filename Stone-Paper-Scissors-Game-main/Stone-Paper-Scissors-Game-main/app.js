let userScore=0;
let compScore=0;


const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#computer-score');
const resetBtn = document.querySelector('#reset');

const genCompChoice = ()=>{
    const options = ['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText="Game Draw. Play Again";
    msg.style.backgroundColor="coral";
}

const playGame=(userChoice)=>{
    // generate computer choice
    const compChoice=genCompChoice();

    // Draw Game
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==='rock')
        {
            // scissor, paper
            userWin=compChoice==='paper'?false:true;
        }
        else if(userChoice==='paper')
        {
            // rock, scissor
            userWin=compChoice==='scissors'?false:true;
        }
        else
        {
            // rock, paper
            userWin=compChoice==='rock'?false:true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);  
    });
});

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="seagreen";
    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You loose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

resetBtn.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});