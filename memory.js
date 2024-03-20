const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
  ];
let flippedCards = [];
let checkingCards = false;
let matchedPairs = 0;
const totalPairs = COLORS.length / 2;
const gameContainer = document.getElementById("game");
const startButton = document.querySelector('h1 button')
const restartButton = document.getElementById('restartButton')
let score = 0;
const numPairs = 5;
gameContainer.style.display = 'none';

document.addEventListener('DOMContentLoaded', (event) => {
    displayBestScore(); 
});

function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
  
    return array;
  }

  function duplicateAndShuffleColors(colors) {
    const numPairs = Math.floor(Math.random() * (colors.length / 2 - colors.length / 4) + colors.length / 4);
    const selectedColors = colors.slice(0, numPairs);
    const colorPairs = selectedColors.concat(selectedColors);
    return shuffle(colorPairs);
}

function generateRandomColors(numPairs) {
    let colors = [];
    for (let i = 0; i < numPairs; i++) {
        const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        colors.push(color, color);
    }
    return shuffle(colors);
}


function startGame() {
    console.log('Game started!')
    matchedPairs = 0;
    score = 0;
    updateScoreDisplay();
    updateBestScoreDisplay();
    gameContainer.innerHTML = '';
    let shuffledColors = generateRandomColors(numPairs);
    createDivsForColors(shuffledColors);
      
    function createDivsForColors(colorArray) {
        for (let color of colorArray) {
          const newDiv = document.createElement("div");
          newDiv.classList.add(color);
          newDiv.addEventListener("click", handleCardClick);
          gameContainer.append(newDiv); 
        }
        
      }
      
      function handleCardClick(event) {
          if (checkingCards || flippedCards.includes(event.target) || event.target.style.backgroundColor !== '') {
            return;
          }
          const clickedCard = event.target;
          const color = clickedCard.classList[0];
          clickedCard.style.backgroundColor = color;
          if (!flippedCards.length) {
            flippedCards.push(clickedCard);
          } 
          else if (flippedCards.length === 1) {
            flippedCards.push(clickedCard);
            checkingCards = true; 
            score++;
            updateScoreDisplay();
            if (flippedCards[0].className === flippedCards[1].className) {
                matchedPairs++;
              flippedCards = [];
              checkingCards = false;
            } 
            if(matchedPairs === totalPairs) {
                checkAndUpdateBestScore();
                restartButton.style.display = 'block'
            }
            else {
              setTimeout(() => {
                flippedCards.forEach(card => card.style.backgroundColor = '');
                flippedCards = [];
                checkingCards = false;
              }, 1000);
            }
          }
        }
}

startButton.addEventListener('click', function(e) {
    this.style.display = 'none';
    document.getElementById('restartButton').style.display = 'none';
    gameContainer.style.display = 'block';
    startGame();
});

function restartGame() {
    gameContainer.innerHTML = '';
    flippedCards = [];
    checkingCards = false;
    startGame();
    document.getElementById('restartButton').style.display = 'none';
    startButton.style.display = 'inline';
}

restartButton.addEventListener('click', function(e) {
    restartGame();
})

function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score'); 
    scoreDisplay.textContent = `Score: ${score}`;
}

function checkAndUpdateBestScore() {
    const bestScore = parseInt(localStorage.getItem('bestScore'), 10);
    console.log(`Current score: ${score}, Best score from storage: ${bestScore}`);
    if (!bestScore || score < bestScore) {
        localStorage.setItem('bestScore', score.toString());
        updateBestScoreDisplay(score);
    }
}

function updateBestScoreDisplay(bestScore) {
    const bestScoreDisplay = document.getElementById('bestScore');
    if (bestScoreDisplay) {
        bestScoreDisplay.textContent = `Best Score: ${bestScore}`;
    } else {
        console.error('Best score display element not found');
    }
}

function displayBestScore() {
    const bestScore = localStorage.getItem('bestScore');
    if (bestScore) {
        updateBestScoreDisplay(bestScore);
    }
}






