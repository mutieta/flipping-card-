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
    { name: "1", Image: "./pictures/1.jpg"},
    { name: "2", Image: "./pictures/2.jpg"},
    { name: "3", Image: "./pictures/3.jpg"},
    { name: "4", Image: "./pictures/4.jpg"},
    { name: "5", Image: "./pictures/5.jpg"},
    { name: "6", Image: "./pictures/6.jpg"},
    { name: "7", Image: "./pictures/7.jpg"},
    { name: "8", Image: "./pictures/8.jpg"},
    { name: "9", Image: "./pictures/9.jpg"},
    { name: "10", Image: "./pictures/10.jpg"},
]