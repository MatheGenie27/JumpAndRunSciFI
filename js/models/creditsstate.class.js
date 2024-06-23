class CreditsState extends State {
  credits = new Credits(this.game);

  constructor(game) {
    super(game);
    this.menuMusicSrc = "assets/music/ACTION PACK 2 OGG/Warped Caves.ogg";
  }

  enter() {
    console.log("Entering Credits State");
    // Hier kannst du Musik abspielen oder andere Aktionen beim Betreten des Credits-States ausführen

    this.game.canvas.style.cursor = "default";
    this.playMusic(this.menuMusicSrc);
  }

  exit() {
    console.log("Exiting Credits State");
    // Hier kannst du die Musik stoppen oder andere Aktionen beim Verlassen des Credits-States ausführen
    this.game.canvas.removeEventListener("click", this.handleClick);
    this.game.canvas.removeEventListener("mousemove", this.handleMouseMove);
  }

  update() {
    // Logik für die Aktualisierung der Credits (falls erforderlich)
  }

  draw() {
    this.game.clearCanvas();
    this.game.paintCanvasBlack();
    this.credits.drawTitle(this.ctx);
    this.credits.drawTexts(this.ctx);
    this.credits.drawButtons(this.ctx);
  }

  handleClick(x, y) {
    this.credits.buttons.forEach((button) => {
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
    for (const button of this.credits.buttons) {
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
