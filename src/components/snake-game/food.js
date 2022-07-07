import { cellSize, cells } from "./constants";
import { helpers } from "./helpers";

export const create = () => ({
  pos: new helpers.Vec(
    ~~(Math.random() * cells) * cellSize,
    ~~(Math.random() * cells) * cellSize
  ),
  color: `hsl(${~~(Math.random() * 360)},100%,50%)`,
  size: cellSize,
});

export const draw = (CTX, food) => {
  let { x, y } = food.pos;
  CTX.globalCompositeOperation = "lighter";
  CTX.shadowBlur = 20;
  CTX.shadowColor = food.color;
  CTX.fillStyle = food.color;
  CTX.fillRect(x, y, food.size, food.size);
  CTX.globalCompositeOperation = "source-over";
  CTX.shadowBlur = 0;
};

export const spawn = (snake, food) => {
  // console.log("Food ", food);
  // console.log("Snake ", food);
  // if (!food) food = create();
  let randX = ~~(Math.random() * cells) * food.size;
  let randY = ~~(Math.random() * cells) * food.size;
  for (let path of snake.history) {
    if (helpers.isCollision(new helpers.Vec(randX, randY), path)) {
      return spawn(snake, food);
    }
  }
  food.color = `hsl(${helpers.randHue()}, 100%, 50%)`;
  food.pos = new helpers.Vec(randX, randY);
};
