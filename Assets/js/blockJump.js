// DOM Elements
const game = document.getElementById('game1-container');
const character = document.getElementById('game1-character');

//Game variables
let isJumping = false;
let score = 0;
let blocks = [];
let gameLoop;
let gameStarted = false;
let gameOver = false;

//Constants
const BLOCK_SPEED = 3; //speed in px/frame
const JUMP_DURATION = 530; //Jump duration in milliseconds