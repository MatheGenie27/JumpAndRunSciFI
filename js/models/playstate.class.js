class PlayState extends State {
    enter() {
        console.log("Entering Play State");
        // Initialisierung des Spiels
    }

    update() {
        // Logik zum Aktualisieren des Spiels
    }

    draw() {
        const ctx = this.game.context;
        ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        
        // Spiellogik zeichnen
    }

    exit() {
        console.log("Exiting Play State");
        // Aufräumlogik für das Spiel
    }
}
