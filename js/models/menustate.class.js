class MenuState extends State {
    enter() {
        console.log("Entering Menu State");
        // Hier kannst du Initialisierungslogik für das Menü hinzufügen
    }

    update() {
        // Logik zum Aktualisieren des Menüs
        // Hier könntest du z.B. auf Benutzereingaben reagieren
    }

    draw() {
        const ctx = this.game.context;
        ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText('Hauptmenü', 100, 100);

        // Weitere Menüelemente zeichnen
    }

    exit() {
        console.log("Exiting Menu State");
        // Hier kannst du Aufräumlogik hinzufügen, falls nötig
    }
}
