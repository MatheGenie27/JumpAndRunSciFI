class Sentinel extends Enemy {
    x=700;
    width=37;
    height=42;
    sizingFactor = 1.5;
    runSpeed = 0.8;

    IMAGES_MOVE = [
        "assets/img/enemies/sentinel/move/sentinel1.png",
        "assets/img/enemies/sentinel/move/sentinel2.png",
        "assets/img/enemies/sentinel/move/sentinel3.png",
        "assets/img/enemies/sentinel/move/sentinel4.png",
        "assets/img/enemies/sentinel/move/sentinel5.png",
        "assets/img/enemies/sentinel/move/sentinel6.png",
    ]


    constructor(level){
        super(level);
        this.width = this.width * this.sizingFactor;
        this.height = this.height * this.sizingFactor;
    

    this.y = this.level.ground_y - this.height -10;
    this.y -= 30;
    
    this.loadImages(this.IMAGES_MOVE);
    
    

    this.animate();
    this.applyGravity();

    }


    animate(){
    
        setInterval(() => {
          //this.walking_sound.pause();

          //hier KI implementieren
          this.moveLeft();
          
          
          
          
          
          
        }, 1000 / 60);
    
        setInterval(() => {

             this.playAnimation(this.IMAGES_MOVE);

          
          //console.log("isAboveGround: " +this.isAboveGround())
          //console.log("isJump: " +this.isJump);
    
        }, 1000 / 12);
}





}