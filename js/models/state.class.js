class State {
    musicStarted;
    game;

    constructor(game) {
        this.game = game;
        this.musicStarted = false;
        this.ctx = this.game.context;
        this.game.canvas.addEventListener("mousemove", (event)=> this.game.handleMouseMove(event));
    }

    enter() {
        // Wird aufgerufen, wenn der Zustand aktiviert wird
    }

    exit() {
        // Wird aufgerufen, wenn der Zustand verlassen wird
    }

    update() {
        // Logik zum Aktualisieren des Zustands
    }

    draw() {
        // Logik zum Zeichnen des Zustands
    }

    handleClick(x ,y){
        
    }



    playMusic(src){
        if (!this.musicStarted) {
            var playPromise = this.game.playBackgroundMusic(src);
      
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  console.log("Background music started playing.");
                })
                .catch((error) => {
                  console.error("Failed to play background music:", error);
                });
            } else {
              console.warn(
                "Audio playback not initiated. Check browser restrictions."
              );
            }
          }
    }


}
