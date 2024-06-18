class MenuState extends State {

    menu = new Menu();








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
        
        //this.menu.draw(ctx, menuBackground);
        //this.menu.draw(ctx, title);
        //this.menu.draw(ctx, startButton);
        //this.menu.draw(ctx, creditsButton);
        
        
        ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        
        
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText('Hauptmenü', 100, 100);

        
        ctx.textAlign='center';
        ctx.fillStyle = 'white';
        ctx.fillRect(this.menu.startButton.x, this.menu.startButton.y, this.menu.startButton.width, this.menu.startButton.height);
        ctx.fillStyle = 'black';
        ctx.fillText(this.menu.startButton.text, this.menu.startButton.x + this.menu.startButton.width / 2, this.menu.startButton.y + this.menu.startButton.height / 2 + 10);


        // Weitere Menüelemente zeichnen
    }

    exit() {
        console.log("Exiting Menu State");
        // Hier kannst du Aufräumlogik hinzufügen, falls nötig
    }
}
