// imports //////////////////////////////////////////
////////////////////////////////////////////////////
import { gameBoard } from "./main.js";

// global variables /////////////////////////////////
////////////////////////////////////////////////////
let isBallMovingRight = true;
let isBallMovingUp = true;

// rendering the ball //////////////////////////////
///////////////////////////////////////////////////
function printHTML(script) {
  let template = document.createElement("template");
  template.innerHTML = script.trim();
  return template.content.firstElementChild;
}

export function moveBall() {
  let ball = document.querySelector(".ball");

  let currentX = ball.offsetTop;
  let currentY = ball.offsetLeft;

  isBallMovingUp ? currentX++ : currentX--;
  isBallMovingRight ? currentY++ : currentY--;

  ball.style.top = currentX;
  ball.style.left = currentY;
  console.log(currentX, currentY);
}

export function renderBall() {
  let ball = printHTML(`
        <div class="ball"></div>
    `);

  gameBoard.append(ball);
  ball.style.top = "50%";
  ball.style.left = "50%";
}
