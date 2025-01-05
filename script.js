const level = parseInt(document.getElementById("level").value);
if (level === 1 || 2 || 3 || 4 || 5) {
    myMusic.src = "/sound/game_sound2.mp3";
    myMusic.volume = 1;
    myMusic.play();
}
let numLimit = null;
let guessLimit = null;
const levelInfo = {
    level1: {
        numLimit: 5,
        guesslimit: 2,
    },
    level2: {
        numLimit: 10,
        guesslimit: 4,
    },
    level3: {
        numLimit: 50,
        guesslimit: 6,
    },
    level4: {
        numLimit: 100,
        guesslimit: 10,
    },
    level5: {
        numLimit: 1000,
        guesslimit: 10,
    },
};
if (level === 1) {
    numLimit = levelInfo.level1.numLimit;
    guessLimit = levelInfo.level1.guesslimit;
    console.log(`This is num l : ${numLimit}`);
    console.log(`This is guess l : ${guessLimit}`);
}
if (level === 2) {
    numLimit = levelInfo.level2.numLimit;
    guessLimit = levelInfo.level2.guesslimit;
    console.log(`This is num l : ${numLimit}`);
    console.log(`This is guess l : ${guessLimit}`);
}
if (level === 3) {
    numLimit = levelInfo.level3.numLimit;
    guessLimit = levelInfo.level3.guesslimit;
    console.log(`This is num l : ${numLimit}`);
    console.log(`This is guess l : ${guessLimit}`);
}
if (level === 4) {
    numLimit = levelInfo.level4.numLimit;
    guessLimit = levelInfo.level4.guesslimit;
    console.log(`This is num l : ${numLimit}`);
    console.log(`This is guess l : ${guessLimit}`);
}
if (level === 5) {
    numLimit = levelInfo.level5.numLimit;
    guessLimit = levelInfo.level5.guesslimit;
    console.log(`This is num l : ${numLimit}`);
    console.log(`This is guess l : ${guessLimit}`);
}
const setnumber = parseInt(Math.random() * numLimit + 1);
console.log(setnumber);
// document.querySelector('.sn').innerHTML = setnumber;
const submit = document.querySelector(".submit_btn");
const userInput = document.querySelector("#userAns");
const guessSlot = document.querySelector("#pre_guess");
const remaining = document.querySelector("#guess_rem");
const lowHigh = document.querySelector(".loworhigh");
let preGuess = [];
let numOfGuess = 1;

const playGame = true;
// const p = document.createElement('p');

if (playGame) {
    submit.addEventListener("click", (e) => {
        console.log(e);
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateNumber(guess);
    });
}

// For validate Number
console.log(numLimit);

function validateNumber(guess) {
    if (isNaN(guess)) {
        alert("This is not a Number.");
    } else if (guess < 1) {
        alert("This is not Valid Number.");
    } else if (guess > numLimit) {
        alert("This Is Bigger Than Limit Number");
    } else {
        preGuess.push(guess);
        if (numOfGuess === guessLimit) {
            displayGuess(guess);
            displayMsg(guess, `Game Over. Random number Was ${setnumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess < setnumber) {
        displayMsg(guess, `This guess is low than number`);
    } else if (guess > setnumber) {
        displayMsg(guess, `This guess is high than number`);
    } else {
        displayMsg(guess, `This guess is right`);
        endGame();
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numOfGuess++;
    remaining.innerHTML = `${(guessLimit + 1) - numOfGuess}`
}

function displayMsg(guess, msg) {
    if (guess === setnumber) {
        lowHigh.innerHTML = `<h4>This guess is right</h4>`
    } else {
        lowHigh.innerHTML = `<h6>${msg}</h6>`
    }
}

const popup = document.getElementById('popup');
const playAgainBtn = document.querySelector('#playagain');
const nextLevelBtn = document.querySelector('#nextlevel');

// let levelb = document.querySelector('#level1');
// console.log(levelb);


function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    userInput.style.cursor = 'not-allowed';
    popup.style.display = 'flex';
    playAgainBtn.addEventListener('click', () => {
        location.reload();
    });
    nextLevelBtn.addEventListener('click', () => {
        if (level === 5) {
            window.location.href = `level_1.html`;
        }
        else {
            window.location.href = `level_${level + 1}.html`;
        }
    });
}


