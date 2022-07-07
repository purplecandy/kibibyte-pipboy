import { H, W, cellSize, cells } from "./constants";
import { helpers } from "./helpers";

export const create = (i, type) => ({
  pos: new helpers.Vec(W / 2, H / 2),
  dir: new helpers.Vec(0, 0),
  type: type,
  index: i,
  delay: 5,
  size: W / cells,
  color: "white",
  history: [],
  total: 1,
});

export const draw = (CTX, snake) => {
  let { x, y } = snake.pos;
  CTX.fillStyle = snake.color;
  CTX.shadowBlur = 20;
  CTX.shadowColor = "rgba(255,255,255,.3 )";
  CTX.fillRect(x, y, snake.size, snake.size);
  CTX.shadowBlur = 0;
  if (snake.total >= 2) {
    for (let i = 0; i < snake.history.length - 1; i++) {
      let { x, y } = snake.history[i];
      CTX.lineWidth = 1;
      CTX.fillStyle = "rgba(225,225,225,1)";
      CTX.fillRect(x, y, snake.size, snake.size);
    }
  }
};

export const walls = (snake) => {
  let { x, y } = snake.pos;
  if (x + cellSize > W) {
    snake.pos.x = 0;
  }
  if (y + cellSize > W) {
    snake.pos.y = 0;
  }
  if (y < 0) {
    snake.pos.y = H - cellSize;
  }
  if (x < 0) {
    snake.pos.x = W - cellSize;
  }
};

export const controls = (key, snake) => {
  let dir = snake.size;
  if (key.ArrowUp) {
    snake.dir = new helpers.Vec(0, -dir);
  }
  if (key.ArrowDown) {
    snake.dir = new helpers.Vec(0, dir);
  }
  if (key.ArrowLeft) {
    snake.dir = new helpers.Vec(-dir, 0);
  }
  if (key.ArrowRight) {
    snake.dir = new helpers.Vec(dir, 0);
  }
};

export const selfCollision = (snake) => {
  //compare the current pos with all prev pos (chain of cells) matches then it's a collision others wise it's all good
  for (let i = 0; i < snake.history.length; i++) {
    let p = snake.history[i];
    if (helpers.isCollision(snake.pos, p)) {
      return true;
    }
  }
};

export const update = (CTX, key, snake, food, onSuccess, onFail) => {
  //1. Reset position if it crosses any walls. As if it goes right + 1 that will start at left = 0
  //2. Draw / mark the cell
  //3. Figure the direction according to the last entered key-store (that hasn't been used)
  //4. Wait for the delay period to over
  //5. Check for collisions
  //5.1 true -> Game over
  //6. Increment the score
  //7. Show the success splash
  //8. Spawn the new food
  //9. Increment the snake size and the current active `this.pos` to history and update this.pos with the new `this.dir`
  //10. Reset the delay
  //11. Check self-collision when it's valid i.e more than 3 snake size

  walls(snake);
  draw(CTX, snake);
  controls(key, snake);
  if (!snake.delay--) {
    if (helpers.isCollision(snake.pos, food.pos)) {
      onSuccess();
      // incrementScore();
      // particleSplash();
      // food.spawn();
      snake.total++;
    }
    snake.history[snake.total - 1] = new helpers.Vec(snake.pos.x, snake.pos.y);
    for (let i = 0; i < snake.total - 1; i++) {
      snake.history[i] = snake.history[i + 1];
    }
    snake.pos.add(snake.dir);
    snake.delay = 5;
    if (snake.total > 3) {
      if (selfCollision(snake)) onFail();
    }
  }
};

export const autoPlay = (CTX, snake, food, onSuccess, onFail) => {
  let key = {
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false,
    ArrowLeft: false,
  };

  const last = snake.last;
  // console.log("Last", last);

  if (last !== "ArrowRight") key.ArrowLeft = snake.pos.x > food.pos.x;
  if (last !== "ArrowLeft") key.ArrowRight = snake.pos.x < food.pos.x;

  if (snake.pos.x === food.pos.x) {
    if (last !== "ArrowDown") key.ArrowUp = snake.pos.y > food.pos.y;
    if (last !== "ArrowUp") key.ArrowDown = snake.pos.y < food.pos.y;
  }

  ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].forEach((type) => {
    if (key[type]) snake.last = type;
  });

  // console.log(
  //   "Key stroke",
  //   Object.entries(key)
  //     .filter(([k, v]) => v)
  //     .map(([k]) => k)
  // );
  update(CTX, key, snake, food, onSuccess, onFail);
};
