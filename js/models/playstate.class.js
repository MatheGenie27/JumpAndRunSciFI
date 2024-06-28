class PlayState extends State {

    
    world = new World(this.game);

    constructor(game){
        super(game);
    }


    enter() {
        console.log("Entering Play State");
        // Initialisierung des Spiels
    }

    update() {
        // Logik zum Aktualisieren des Spiels
    }

    draw() {
        this.game.clearCanvas();
        this.game.paintCanvasBlack();
        this.world.draw();

        
        
        // Spiellogik zeichnen
    }

    exit() {
        console.log("Exiting Play State");
        // Aufräumlogik für das Spiel
    }




    


}
