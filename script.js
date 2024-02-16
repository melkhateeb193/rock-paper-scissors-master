const rulesBtn = document.querySelectorAll('.rulesBtn');
const rulesToggle = document.getElementById('rulesToggle')
const closeBtn = document.getElementById('closeBtn')
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
let resultParagraph = document.getElementById("headerResult");
let scoreCounter = document.getElementById("scoreCounter");
let score = 0;
const gamePlay = document.getElementById('gamePlay')
const ResultDiv = document.getElementById('ResultDiv')
const playAgain = document.getElementById('playAgain')
const myChoose = document.getElementById('myChoose')
const HouseChoose = document.getElementById('HouseChoose')
const choices = [paper, scissors ,rock]
let playerChoice = null;
let computerChoose = null;

// toggle between the rules 
rulesBtn.forEach(btn=>{
    btn.addEventListener("click" , (event)=> {
        rulesToggle.classList.replace('d-none', 'd-flex');
    })
})
closeBtn.addEventListener('click' , ()=>{
    rulesToggle.classList.add('d-none');
})

// fire the Game
function playGame(playerChooice){
    const computerChoice = choices[Math.floor(Math.random()*3)];

    let result="";


    if(playerChooice === computerChoice) {
        result = "TIE";
    }
    else {
        switch(playerChooice) {
            case rock:
                result = (computerChoice === scissors) ? "YOU WIN" : "YOU LOSE";
                break;
            case paper:
                result = (computerChoice === rock) ? "YOU WIN" : "YOU LOSE";
                break;
            case scissors:  
                result = (computerChoice === paper) ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    resultParagraph.textContent = result ;


if(result === "YOU WIN") {
    score ++;
    scoreCounter.textContent = score;
    console.log(scoreCounter) 

}
return computerChoice
}


choices.forEach(btn => {
    btn.addEventListener('click' , event=> {
        playGame(btn)
        gamePlay.classList.add('d-none');
        ResultDiv.classList.remove('d-none');
        playerChoice = btn;
        myChoose.append(playerChoice.cloneNode(true));
        HouseChoose.append(playGame(btn).cloneNode(true));
    })
})

playAgain.addEventListener("click", ()=>{
    gamePlay.classList.remove('d-none');
    ResultDiv.classList.add('d-none'); 
    myChoose.innerHTML = '';
    HouseChoose.innerHTML = '';
})



playAgain.addEventListener("click", ()=>{
    gamePlay.classList.remove('d-none');
    ResultDiv.classList.add('d-none'); 
})