class Fly extends Enemy{

        x=600;
        width=65;
        height=74;
        sizingFactor = 0.5;
        runSpeed = 0.8;


    IMAGES_MOVE = [
        "assets/img/enemies/fly/move/fly1.png",
        "assets/img/enemies/fly/move/fly2.png",
        "assets/img/enemies/fly/move/fly3.png",
        "assets/img/enemies/fly/move/fly4.png",
        "assets/img/enemies/fly/move/fly5.png",
        "assets/img/enemies/fly/move/fly6.png"

    ]




    constructor(level){
        super(level);
        this.width = this.width * this.sizingFactor;
        this.height = this.height * this.sizingFactor;
    

    this.y = this.level.ground_y - this.height -10;
    this.y -= 50;
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