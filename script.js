let rand=(parseInt(Math.random()*100+1));
const input=document.querySelector(".input");
const submit=document.querySelector(".submit");
const prevGuesses=document.querySelector(".prev-guesses");
const remaining=document.querySelector(".remaining");
const lowHigh=document.querySelector(".low-hight");
const startAgain=document.querySelector(".results");
const para =document.createElement("p");
let prevGuessArr=[];
let numGuess=1;
let playGame=true;
if(playGame){
    submit.addEventListener("click",function(event){
        event.preventDefault();
        const guess = parseInt(input.value)
        validNumber(guess)
    })
}
function validNumber(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess<1){
        alert("You entered a number less than 1")
    }
    else if (guess>100){
        alert("you entered a number greater than 100")
    }
    else{
        prevGuessArr.push(guess)
        if(numGuess>=10){
            displayGuess(guess)
            displayMessage(` GAME OVER. The number was ${rand}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===rand){
        displayMessage(`CONGRATULATIONS! You guessed it right`)
        endGame()
    }
    else if(guess>rand){
        displayMessage(`The number is LOWER`)
    }
    else if(guess<rand){
        displayMessage(`The number is HIGHER`)
    }
}
function displayGuess(guess){
    input.value=""
    prevGuesses.innerHTML+=`${guess} , `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
    lowHigh.innerHTML = `<h3>${message}</h3>`;
}
function endGame(){
    input.value="";
    submit.setAttribute("disabled","");
    input.setAttribute("disabled","");
    para.classList.add(".newGame");
    para.innerHTML = `<h3 class="newGame">Start a new game</h3>`;
    startAgain.appendChild(para);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton=document.querySelector(".newGame")
    newGameButton.addEventListener("click",function(event){
        rand=(parseInt(Math.random()*100+1));
        prevGuessArr=[];
        numGuess=1
        prevGuesses.innerHTML=""
        remaining.innerHTML=`${11-numGuess}`
        input.removeAttribute("disabled");
        submit.removeAttribute("disabled");
        startAgain.removeChild(p);
        playGame=true
    })
}


