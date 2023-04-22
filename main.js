// imports //////////////////////////////////
////////////////////////////////////////////
import { renderBall, moveBall } from "./ball.js";

// global variables ////////////////////////
///////////////////////////////////////////
let isGameRunning = false;
let gameSpeed = 150;

export let gameBoard = document.getElementById("game-board");

// game run ///////////////////////////////
//////////////////////////////////////////
function newFrame() {
  if (!isGameRunning) {
    console.log("I STOPPED");
    return;
  }

  // do things
  moveBall();

  setTimeout(() => {
    newFrame();
  }, gameSpeed);
}

// testing ////////////////
//////////////////////////
renderBall();
isGameRunning = true;
// newFrame();
