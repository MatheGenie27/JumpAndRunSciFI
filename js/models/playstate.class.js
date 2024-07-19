class PlayState extends State {

    
    

    constructor(game){
        super(game);
        //scriptCom();
    }


    enter() {
        console.log("Entering Play State");
        // Initialisierung des Spiels
        this.world = new World(this.game);
        initLevel();
        this.world.declareLevel();
        this.world.initCharacter();
        //scriptCom();
        //createEnemies();
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
