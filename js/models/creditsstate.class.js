class CreditsState {
    constructor(game) {
        this.game = game;
        this.ctx = this.game.context;

        this.credits = new Credits(this.game);
        
        this.game.canvas.addEventListener("mousemove", (event) => {
            const rect = this.game.canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            this.handleMouseMove(x, y);
          });
    }

    enter() {
        console.log("Entering Credits State");
        // Hier kannst du Musik abspielen oder andere Aktionen beim Betreten des Credits-States ausführen
        this.game.canvas.addEventListener('click', this.handleClick);
        this.game.canvas.style.cursor = "default";
    }

    exit() {
        console.log("Exiting Credits State");
        // Hier kannst du die Musik stoppen oder andere Aktionen beim Verlassen des Credits-States ausführen
        this.game.canvas.removeEventListener('click', this.handleClick);
        this.game.canvas.removeEventListener('mousemove', this.handleMouseMove);
    }

    update(deltaTime) {
        // Logik für die Aktualisierung der Credits (falls erforderlich)
    }

    draw() {
        const ctx = this.game.context;
        this.game.clearCanvas();
        
        
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
       
       
        this.credits.drawTitle(ctx);
        this.credits.drawCredits(ctx);
        this.credits.drawButton(ctx);

        

        

       
    }

    handleClick = (x, y) => {
        const button = this.credits.button;
    
        if (x >= button.x - (button.width / 2) &&
            x <= button.x - (button.width / 2) + button.width &&
            y >= button.y - button.height / 1.4 &&
            y <= button.y - button.height / 1.4 + button.height) {
            button.onclick();
        }
    }

    handleMouseMove(x, y) {
        let hovering = false;
        const button = this.credits.button;
        
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
        
        
        this.game.canvas.style.cursor = hovering ? "pointer" : "default";
      }
    

}