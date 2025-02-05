const wordDisplay = document.querySelector(".word-display");
const incorrectLetter = document.querySelector(".guesses-text b");
const keyboard = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModel = document.querySelector(".game-model");
const playAgainButton = gameModel.querySelector("button");
const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },


];
let currentWord1, correctLetters1, wrongGuessCount1;

const MAX_GUESSES = 6;



function resetGame() {
    correctLetters1 = [];
    wrongGuessCount1 = 0;
    hangmanImage.src = "hangman-0.svg";
    incorrectLetter.innerText = `${wrongGuessCount1} / ${MAX_GUESSES}`;
    wordDisplay.innerHTML = currentWord1.split("").map(() => `<li class="letter"></li>`).join("");
    keyboard.querySelectorAll("button").forEach(button => button.disabled = false);
    gameModel.classList.remove("show");

}

function getRandomWord() {
    // Selecting a random word and hint from the wordList
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord1 = word;// Making currentWord3 as random word
    console.log(currentWord1);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();

}

function checkCorrect(isVictory) {
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModel.querySelector("img").src = `${isVictory ? 'victory' : 'lost'}.gif`;
    gameModel.querySelector("h4").innerText = isVictory ? 'Correct' : 'Wrong';
    gameModel.querySelector("p").innerHTML = `${modalText} <b>${currentWord1}</b>`;
    gameModel.classList.add("show");
    keyboard.querySelectorAll("button").forEach(button => button.disabled = true);


}
function initGame(button, clickedLetter) {

    if (currentWord1.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord1].forEach((letter, index) => {
            if (clickedLetter === letter) {
                correctLetters1.push(clickedLetter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // If clicked letter doesn't exist then update the wrongGuessCount3 and hangman image
        wrongGuessCount1++;
        hangmanImage.src = `hangman-${wrongGuessCount1}.svg`;
    }
    button.disabled = true; // Disabling the clicked button so user can't click again
    incorrectLetter.innerText = `${wrongGuessCount1} / ${MAX_GUESSES}`;
    // Calling checkCorrect function if any of these condition meets
    if (wrongGuessCount1 === MAX_GUESSES) return checkCorrect(false);
    if (correctLetters1.length === currentWord1.length) return checkCorrect(true);
}


// Creating keyboard buttons and adding event listeners
for (let j = 97; j <= 122; j++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(j);
    keyboard.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(j)));
}
getRandomWord();
playAgainButton.addEventListener("click", getRandomWord);


