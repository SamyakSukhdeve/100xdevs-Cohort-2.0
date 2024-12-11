enum Direction {
  up,
  down,
  right,
  left,
}

function doSometing(keyPressed: Direction) {
  if (keyPressed == Direction.up) {
    console.log("UP");
  }
  if (keyPressed == Direction.down) {
    console.log("DOWN");
  }
  if (keyPressed == Direction.right) {
    console.log("RIGHT");
  }
  if (keyPressed == Direction.left) {
    console.log("LEFT");
  }
}

console.log(doSometing(Direction.down));
