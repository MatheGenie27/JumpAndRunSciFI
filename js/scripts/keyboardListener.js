document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp") {
    keyboard.UP = true;
  }

  if (event.key == "ArrowDown") {
    keyboard.DOWN = true;
  }

  if (event.key == "ArrowLeft") {
    keyboard.LEFT = true;
  }

  if (event.key == "ArrowRight") {
    keyboard.RIGHT = true;
  }

  if (event.key === " ") {
    keyboard.SPACE = true;
  }

  if (event.key == "d") {
    keyboard.D = true;
  }

  if (event.key == "f") {
    keyboard.F = true;
  }

  if (event.key == "e") {
    keyboard.E = true;
  }

  if (event.key == "w") {
    keyboard.E = true;
  }

  if (event.key == "a") {
    keyboard.E = true;
  }

  if (event.key == "s") {
    keyboard.E = true;
  }

  if (event.key == "x") {
    keyboard.X = true;
  }

  if (event.key == "l") {
    keyboard.L = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key == "ArrowUp") {
    keyboard.UP = false;
  }

  if (event.key == "ArrowDown") {
    keyboard.DOWN = false;
  }

  if (event.key == "ArrowLeft") {
    keyboard.LEFT = false;
  }

  if (event.key == "ArrowRight") {
    keyboard.RIGHT = false;
  }

  if (event.key === " ") {
    keyboard.SPACE = false;
  }

  if (event.key == "d") {
    keyboard.D = false;
  }

  if (event.key == "f") {
    keyboard.F = false;
  }

  if (event.key == "e") {
    keyboard.E = false;
  }

  if (event.key == "w") {
    keyboard.E = false;
  }

  if (event.key == "a") {
    keyboard.E = false;
  }

  if (event.key == "s") {
    keyboard.E = false;
  }

  if (event.key == "x") {
    keyboard.X = false;
  }

  if (event.key == "l") {
    keyboard.L = false;
  }
});
