class InfoState extends State {
   info = new Info(this.game); 
   
    constructor(game) {
        super(game);
        this.menuMusicSrc = "assets/music/ACTION PACK 2 OGG/Warped Caves.ogg";     
        

        // Entferne Event-Listener für Scroll- und Touch-Funktionalität
    }

    enter() {
        console.log("Entering InfoState")
        this.game.canvas.style.cursor = "default";
        this.playMusic(this.menuMusicSrc);
        // Optional: Aktionen beim Betreten des States
    }

    exit() {
        console.log("Leaving InfoState");
        this.game.canvas.removeEventListener("click", this.handleClick);
        this.game.canvas.removeEventListener("mousemove", this.handleMouseMove);
        // Optional: Aktionen beim Verlassen des States
    }

    update() {
        // Optional: Update-Logik für den State
    }

    draw() {
        
        this.game.clearCanvas();
        this.game.paintCanvasBlack();
        this.info.drawTitle(this.ctx);
        this.info.drawText(this.ctx);
        this.info.drawButtons(this.ctx);
    }


    handleClick(x, y) {
        this.info.buttons.forEach((button) => {
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
        for (const button of this.info.buttons) {
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