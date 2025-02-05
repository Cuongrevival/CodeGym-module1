const wordDisplay = document.querySelector(".word-display");
const incorrectLetter = document.querySelector(".guesses-text b");
const keyboard = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModel = document.querySelector(".game-model");
const playAgainButton = gameModel.querySelector("button");
const wordList = [

    {
        word: 'perfect',
        hint: 'Can not have any mistake'
    },
    {
        word: 'masterpiece',
        hint: 'Describe the true beauty of an art'
    },
    {
        word: 'penetrate',
        hint: 'Go through everything'
    },
    {
        word: 'impossible',
        hint: 'Describe something that can not be done even though trying to do'
    },
    {
        word: 'glitch',
        hint: 'A type of square virus effects the screen'
    },
    {
        word: 'palatable',
        hint: 'A synonym of yummy'
    },
    {
        word: 'corruptive',
        hint: 'guilty of dishonest practices, as bribery; lacking integrity'
    },
    {
        word: 'radical',
        hint: 'extreme, especially as regards change from accepted or traditional forms'
    },
    {
        word: 'stilted',
        hint: 'unnaturally stiff, formal, or pompous'
    },
    {
        word: 'waver',
        hint: 'to flicker or quiver, as light'
    },
    {
        word: 'modern',
        hint: 'characteristic of present and recent time; contemporary; not antiquated or obsolete'
    },
    {
        word: 'neutral',
        hint: 'not aligned with or supporting any side or position in a controversy'
    },
    {
        word: 'rough',
        hint: 'having a coarse or uneven surface, as from projections, irregularities, or breaks; not smooth'
    },
    {
        word: 'woodchuck',
        hint: 'a stocky burrowing rodent that hibernates in the winter'
    }


];
let currentWord3, correctLetters3, wrongGuessCount3;

const MAX_GUESSES = 6;



function resetGame() {
    correctLetters3 = [];
    wrongGuessCount3 = 0;
    hangmanImage.src = "hangman-0.svg";
    incorrectLetter.innerText = `${wrongGuessCount3} / ${MAX_GUESSES}`;
    wordDisplay.innerHTML = currentWord3.split("").map(() => `<li class="letter"></li>`).join("");
    keyboard.querySelectorAll("button").forEach(button => button.disabled = false);
    gameModel.classList.remove("show");

}

function getRandomWord() {
    // Selecting a random word and hint from the wordList
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord3 = word;// Making currentWord3 as random word
    console.log(currentWord3);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();

}

function checkCorrect(isVictory) {
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModel.querySelector("img").src = `${isVictory ? 'victory' : 'lost'}.gif`;
    gameModel.querySelector("h4").innerText = isVictory ? 'Correct' : 'Wrong';
    gameModel.querySelector("p").innerHTML = `${modalText} <b>${currentWord3}</b>`;
    gameModel.classList.add("show");
    if (isVictory) {

    }
    keyboard.querySelectorAll("button").forEach(button => button.disabled = true);


}
function initGame(button, clickedLetter) {

    if (currentWord3.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord3].forEach((letter, index) => {
            if (clickedLetter === letter) {
                correctLetters3.push(clickedLetter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // If clicked letter doesn't exist then update the wrongGuessCount3 and hangman image
        wrongGuessCount3++;
        hangmanImage.src = `hangman-${wrongGuessCount3}.svg`;
    }
    button.disabled = true; // Disabling the clicked button so user can't click again
    incorrectLetter.innerText = `${wrongGuessCount3} / ${MAX_GUESSES}`;
    // Calling checkCorrect function if any of these condition meets
    if (wrongGuessCount3 === MAX_GUESSES) return checkCorrect(false);
    if (correctLetters3.length === currentWord3.length) return checkCorrect(true);
}


// Creating keyboard buttons and adding event listeners
for (let k = 97; k <= 122; k++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(k);
    keyboard.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(k)));
}
getRandomWord();
playAgainButton.addEventListener("click", getRandomWord);


