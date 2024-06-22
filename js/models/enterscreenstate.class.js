class EnterScreenState {
  constructor(game) {
    this.game = game;
    
  
    this.imageLoaded = false;
    this.img = new Image();
    this.img.src = "./assets/img/enterscreen.jpg";
    this.img.onload = () => {
      this.imageLoaded = true;
      this.draw();
    };

    this.clickHandler = this.handleClick.bind(this);
    this.animationInProgress = false;
    this.registerClick();

    this.mouseEnterHandler = this.handleMouseEnter.bind(this);
    this.mouseLeaveHandler = this.handleMouseLeave.bind(this);

    this.game.canvas.addEventListener("mouseenter", this.mouseEnterHandler);
    this.game.canvas.addEventListener("mouseleave", this.mouseLeaveHandler);

  }

  enter() {
    console.log("Entering EnterScreen");
    this.game.canvas.addEventListener("click", this.handleClick);
    this.draw();


  }

  registerClick() {
    document.addEventListener('click', this.clickHandler, { once: true });
  }

  

  update() {}

  exit() {
    console.log("Exiting EnterScreen");
   
    this.game.canvas.removeEventListener("click", this.handleClick);
    this.game.canvas.removeEventListener("mouseenter", this.mouseEnterHandler);
    this.game.canvas.removeEventListener("mouseleave", this.mouseLeaveHandler);
    this.handleMouseLeave();
    


    this.game.clearCanvas();
  }

  handleClick = () => {
    if (!this.animationInProgress) {
    this.animationInProgress = true;    
    this.animateStaticNoise(() => {
        this.animationInProgress = false;
      this.game.switchState(new MenuState(this.game));
    });

    }
  };

  animateStaticNoise(callback) {
    const duration = 1000; // Dauer der Animation in Millisekunden
    const startTime = performance.now();

    const renderNoise = (now) => {
      const elapsedTime = now - startTime;

      if (elapsedTime < duration) {
        this.renderNoiseFrame();
        requestAnimationFrame(renderNoise);
      } else {
        this.game.clearCanvas();
        callback();
      }
    };

    requestAnimationFrame(renderNoise);
  }

  renderNoiseFrame() {
    const ctx = this.game.context;
    const imageData = ctx.createImageData(
      this.game.canvas.width,
      this.game.canvas.height
    );
    for (let i = 0; i < imageData.data.length; i += 4) {
      const color = Math.random() * 255;
      imageData.data[i] = color;
      imageData.data[i + 1] = color;
      imageData.data[i + 2] = color;
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }

  draw() {
    const ctx = this.game.context;
    ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // Hintergrund
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // Bild
    if (this.imageLoaded) {
      ctx.drawImage(
        this.img,
        this.game.canvas.width / 2 - this.img.width / 2,
        this.game.canvas.height / 2 - this.img.height / 2
      );
    } else {
      ctx.font = "24px Arial";
      ctx.fillText(
        "Loading...",
        this.game.canvas.width / 2,
        this.game.canvas.height / 2
      );
    }

    // Titel
    ctx.font = "66px Wallpoet, Arial";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "aqua";
    ctx.textAlign = "center";
    ctx.lineWidth = 6; // Breite des Rahmens
    ctx.strokeText(
      "Cybercity Soldier",
      this.game.canvas.width / 2,
      this.game.canvas.height / 2 - 50
    );
    ctx.fillText(
      "Cybercity Soldier",
      this.game.canvas.width / 2,
      this.game.canvas.height / 2 - 50
    );

    //Aufforderung zum Draufklicken
    ctx.font = "42px Arial";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "aqua";
    ctx.textAlign = "center";
    ctx.lineWidth = 2;
    ctx.fillText(
      "Click to Enter",
      this.game.canvas.width / 2,
      this.game.canvas.height / 2 + 100
    );
    ctx.strokeText(
      "Click to Enter",
      this.game.canvas.width / 2,
      this.game.canvas.height / 2 + 100
    );
  }


  handleMouseEnter() {
    this.game.canvas.style.cursor = "pointer";
  }

  handleMouseLeave() {
    this.game.canvas.style.cursor = "default";
  }






}
