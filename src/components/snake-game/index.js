import { useEffect, useRef, useState } from "preact/hooks";
import styles from "./style.css";

import { helpers } from "./helpers";
import { H, W, cellSize, cells, cellsCount } from "./constants";
import * as Snake from "./snake";
import * as Food from "./food";
import * as Particle from "./partricle";

const _SnakeGame = () => {
  //States
  const [scoreBoard, setScoreBoard] = useState("00");
  //   const [isGameOver, setGameOver] = useState(false);
  const gameStateRef = useRef({
    snake: null,
    food: null,
    currentHue: null,
    // cells: 20,
    // cellSize: null,
    isGameOver: false,
    tails: [],
    score: 0,
    maxScore: window.localStorage.getItem("maxScore") || undefined,
    particles: [],
    splashingParticleCount: 20,
    // cellsCount: null,
    requestID: null,
  });
  const gameState = gameStateRef.current;

  const canvasRef = useRef();
  const [canvasState, setCanvasState] = useState();

  //Collects keyboard stroke state
  const keyRef = useRef({
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false,
    ArrowLeft: false,
  });

  //Getters

  const getCTX = () => canvasRef.current.getContext("2d");

  //Listeners

  const listenKeyStrokes = (event) => {
    //restrict illegal moves as like the player can't go reverse
    if (event.key === "ArrowUp" && keyRef.current.ArrowDown) return;
    if (event.key === "ArrowDown" && keyRef.current.ArrowUp) return;
    if (event.key === "ArrowLeft" && keyRef.current.ArrowRight) return;
    if (event.key === "ArrowRight" && keyRef.current.ArrowLeft) return;

    //Enable and reset others
    Object.entries(keyRef.current).forEach(([key]) => {
      keyRef.current[key] = key === event.key;
    });
  };

  const attachListeners = () => {
    addEventListener("keydown", listenKeyStrokes);
  };

  const removeListeners = () => {
    removeEventListener("keydown", listenKeyStrokes);
  };
  //Functions

  const incrementScore = () => {
    gameState.score++;
    setScoreBoard(gameState.score.toString().padStart(2, "0"));
  };

  const particleSplash = () => {
    for (let i = 0; i < gameState.splashingParticleCount; i++) {
      let vel = new helpers.Vec(Math.random() * 6 - 3, Math.random() * 6 - 3);
      let position = new helpers.Vec(
        gameState.food.pos.x,
        gameState.food.pos.y
      );
      gameState.particles.push(
        Particle.create(
          position,
          gameState.food.color,
          gameState.food.size,
          vel
        )
      );
    }
  };

  const gameOver = (CTX, maxScore, score) => {
    maxScore ? null : (maxScore = score);
    score > maxScore ? (maxScore = score) : null;
    window.localStorage.setItem("maxScore", maxScore);
    CTX.fillStyle = "#4cffd7";
    CTX.textAlign = "center";
    CTX.font = "bold 30px Poppins, sans-serif";
    CTX.fillText("GAME OVER", W / 2, H / 2);
    CTX.font = "15px Poppins, sans-serif";
    CTX.fillText(`SCORE   ${score}`, W / 2, H / 2 + 60);
    CTX.fillText(`MAXSCORE   ${maxScore}`, W / 2, H / 2 + 80);
  };

  const clear = () => {
    getCTX().clearRect(0, 0, W, H);
  };

  const loop = () => {
    clear();
    if (!gameState.isGameOver) {
      gameState.requestID = setTimeout(loop, 1000 / 60);
      helpers.drawGrid(getCTX(), cells, W, H);
      Snake.update(
        getCTX(),
        keyRef.current,
        gameState.snake,
        gameState.food,
        function onSuccess() {
          incrementScore();
          particleSplash();
          Food.spawn(gameState.snake, gameState.food);
        },
        function onFail() {
          gameState.isGameOver = true;
        }
      );
      Food.draw(getCTX(), gameState.food);
      gameState.particles.forEach((particle) =>
        Particle.update(getCTX(), particle)
      );
      helpers.garbageCollector(gameState.particles);
      console.log("Game state", gameState);
    } else {
      clear();
      gameOver(getCTX(), gameState.maxScore, gameState.score);
    }
  };

  const init = () => {
    getCTX().imageSmoothingEnabled = false;
    gameState.snake = Snake.create();
    gameState.food = Food.create();
    attachListeners();
    console.log("Initialized", gameState);
    loop();
  };

  const reset = () => {
    setScoreBoard("00");
    gameState.score = 0;
    gameState.snake = Snake.create();
    gameState.food = Food.create();
    gameState.isGameOver = true;
    Food.spawn(gameState.snake, gameState.food);
    clearTimeout(gameState.requestID);
    loop();
  };

  useEffect(() => {
    canvasRef.current.width = W;
    canvasRef.current.height = H;
    init();
    return () => {
      removeListeners();
    };
  }, []);

  return (
    <div class={`${styles.container} ${styles.noselect}`}>
      <div class={styles.wrapper}>
        <button id={styles.replay} onClick={reset}>
          <i class="fas fa-play"></i>
          RESTART
        </button>
        <div id="canvas">
          <canvas ref={canvasRef}></canvas>
        </div>
        <div id="ui">
          <h2>SCORE</h2>
          <span id="score">00</span>
        </div>
      </div>
    </div>
  );
};

const SnakeGame = () => {
  const [isMounted, setGameMount] = useState(false);
  return (
    <>
      <a
        onClick={() => {
          setGameMount(!isMounted);
        }}
      >
        {!isMounted ? "Play" : "Stop"}
      </a>
      {isMounted && <_SnakeGame />}
    </>
  );
};

export default SnakeGame;
