class MenuState extends State {
  menu = new Menu(this.game);
  

  constructor(game) {
    super(game);
    this.menuMusicSrc = "./assets/music/ACTION PACK 1 OGG/Long Preparation.ogg";
    
  }

  enter() {
    console.log("Entering Menu State");

    this.playMusic(this.menuMusicSrc);
    
    this.menu.drawAnimation(this.ctx);
    // Hier kannst du Initialisierungslogik für das Menü hinzufügen
  }

  update() {
    // Logik zum Aktualisieren des Menüs
    // Hier könntest du z.B. auf Benutzereingaben reagieren
  }

  draw() {
    this.game.clearCanvas();
    this.game.paintCanvasBlack();
    this.menu.drawTitle(this.ctx);
    this.menu.drawButtons(this.ctx);
    this.menu.drawAnimationBorder(this.ctx);
  }

  exit() {
    console.log("Exiting Menu State");
    this.game.stopBackgroundMusic();
    this.menu.stopAnimation();
    this.game.canvas.removeEventListener("click", this.handleClick);
    this.game.canvas.removeEventListener("mousemove", this.handleMouseMove);
    this.game.clearCanvas();
    this.game.canvas.style.cursor = "default";

    // Hier kannst du Aufräumlogik hinzufügen, falls nötig
  }

  handleClick(x, y) {
    this.menu.buttons.forEach((button) => {
      if (
        x >= button.x - button.width / 2 &&
        x <= button.x - button.width / 2 + button.width &&
        y >= button.y - button.height / 1.4 &&
        y <= button.y - button.height / 1.4 + button.height
      ) {
        button.onclick();
      }
    });
  }

  handleMouseMove(x, y) {
    let hovering = false;
    for (const button of this.menu.buttons) {
      if (
        x >= button.x - button.width / 2 &&
        x <= button.x - button.width / 2 + button.width &&
        y >= button.y - button.height / 1.4 &&
        y <= button.y - button.height / 1.4 + button.height
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
