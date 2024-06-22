class MenuState extends State {
  menu = new Menu(this.game);
  musicStarted;

  constructor(game) {
    super(game);
    this.menuMusicSrc = "./assets/music/ACTION PACK 1 OGG/Long Preparation.ogg";
    this.musicStarted = false;
    this.ctx = this.game.context;

    this.game.canvas.addEventListener("mousemove", (event) => {
        const rect = this.game.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        this.handleMouseMove(x, y);
      });


    
  }

  enter() {
    console.log("Entering Menu State");
    


    

    if(!this.musicStarted){
        var playPromise = this.game.playBackgroundMusic(this.menuMusicSrc);

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log("Background music started playing.");
                })
                .catch((error) => {
                    console.error("Failed to play background music:", error);
                });
        } else {
            console.warn("Audio playback not initiated. Check browser restrictions.");
        }

    }
  this.menu.drawAnimation(this.ctx);
    // Hier kannst du Initialisierungslogik für das Menü hinzufügen
  }

  update() {
    // Logik zum Aktualisieren des Menüs
    // Hier könntest du z.B. auf Benutzereingaben reagieren
  }

  draw() {
    

    //this.menu.draw(ctx, menuBackground);
    //this.menu.draw(ctx, title);
    //this.menu.draw(ctx, startButton);
    //this.menu.draw(ctx, creditsButton);

    this.game.clearCanvas();
    
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    //ManinMenu-Title draw

    this.menu.drawTitle(this.ctx);

    //Main Menu Buttons draw

    this.menu.drawButtons(this.ctx);

    // Weitere Menüelemente zeichnen

    
    this.menu.drawAnimationBorder(this.ctx);
  }

  exit() {
    console.log("Exiting Menu State");
    this.game.stopBackgroundMusic();
    this.menu.stopAnimation();
    this.game.canvas.removeEventListener("click", this.handleClick);
    this.game.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.game.clearCanvas();
    this.game.canvas.style.cursor = "default";


    // Hier kannst du Aufräumlogik hinzufügen, falls nötig
  }

  handleClick(x, y) {
    this.menu.buttons.forEach(button => {
        if (x >= button.x-(button.width/2) &&
        x <= button.x-(button.width/2) + button.width &&
        y >= button.y - button.height/1.4 &&
        y <= button.y - button.height/1.4 + button.height) {
            button.onclick();
        }
    });
}

  handleMouseMove(x, y) {
    let hovering = false;
    for (const button of this.menu.buttons) {
        if (
        x >= button.x-(button.width/2) &&
        x <= button.x-(button.width/2) + button.width &&
        y >= button.y - button.height/1.4 &&
        y <= button.y - button.height/1.4 + button.height
      ) {
        hovering = true;
        button.hovered = true;
        
      } else {
        button.hovered = false;
      }
    }
    this.game.canvas.style.cursor = hovering ? "pointer" : "default";
  }
}
