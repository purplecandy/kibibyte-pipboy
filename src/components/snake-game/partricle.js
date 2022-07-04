import { helpers } from "./helpers";

export const create = (pos, color, size, vel) => ({
  pos: pos,
  color: color,
  size: Math.abs(size / 2),
  ttl: 0,
  gravity: -0.2,
  vel: vel,
});

export const draw = (CTX, particle) => {
  let { x, y } = particle.pos;
  let hsl = particle.color
    .split("")
    .filter((l) => l.match(/[^hsl()$% ]/g))
    .join("")
    .split(",")
    .map((n) => +n);
  let [r, g, b] = helpers.hsl2rgb(hsl[0], hsl[1] / 100, hsl[2] / 100);
  CTX.shadowColor = `rgb(${r},${g},${b},${1})`;
  CTX.shadowBlur = 0;
  CTX.globalCompositeOperation = "lighter";
  CTX.fillStyle = `rgb(${r},${g},${b},${1})`;
  CTX.fillRect(x, y, particle.size, particle.size);
  CTX.globalCompositeOperation = "source-over";
};

export const update = (CTX, particle) => {
  draw(CTX, particle);
  particle.size -= 0.3;
  particle.ttl += 1;
  particle.pos.add(particle.vel);
  particle.vel.y -= particle.gravity;
};
