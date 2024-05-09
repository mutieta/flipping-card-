const moves = document.getElementById("move-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");

let cards;
let interval;
let firstCard = false;
let secondCard = false;

//item array
const items = [
    { name: "1", image: "./pictures/1.jpg"},
    { name: "2", image: "./pictures/2.jpg"},
    { name: "3", image: "./pictures/3.jpg"},
    { name: "4", image: "./pictures/4.jpg"},
    { name: "5", image: "./pictures/5.jpg"},
    { name: "6", image: "./pictures/6.jpg"},
    { name: "7", image: "./pictures/7.jpg"},
    { name: "8", image: "./pictures/8.jpg"},
    { name: "9", image: "./pictures/9.jpg"},
    { name: "10", image: "./pictures/10.jpg"},
    { name: "11", image: "./pictures/11.jpg"},
    { name: "12", image: "./pictures/12.jpg"},
];

//initial time
let seconds = 0;
let minutes = 0;
//initial moves and win count
let movesCount = 0;
let winCount = 0;

//for timer
const timeGenerator = () => {
    seconds += 1;
    //minutes logic
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    //format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

//for calculating moves
const moveCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//pick random objects from the items array
const generateRandom = (size = 4) => {
    //temporary array
    let tempArray = [...items];
    //initializes cardValues array
    let cardValues = [];
    //size should be double (4x4 matrix)/2 since pairs of objects would exist
    size = (size * size) / 2 ;
    //random object selection 
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        //once selected remove the object from temp array
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
    //simple shuffle
    cardValues.sort(() => Math.random() - 0.5);
    for (let i = 0; i < size * size; i++) {
        /*
        create card 
        before => front side ( contains question mark);
        after => back side ( contain actual imagine);
        data-card value is a custom attribute which store the names of the card to match later
        */
       gameContainer.innerHTML += `
           <div class="class-container" data-card-value="${cardValues[i].name}">
            <div class="card-before">?</div>
            <div class="card-after">
            <img src="${cardValues[i].image}" class="image"/></div>
       `;
    }

    //grid
    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
};

//initialize value and func calls
const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
};
