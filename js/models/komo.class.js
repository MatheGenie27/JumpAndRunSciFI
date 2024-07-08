class Komo extends Enemy{
    x=1500;
    width=96;
    height=32;
    sizingFactor= 1.3;
    runSpeed = 3;


IMAGES_MOVE = [
   "assets/img/enemies/komo/move/komo1.png",
   "assets/img/enemies/komo/move/komo2.png",
   "assets/img/enemies/komo/move/komo3.png",
   "assets/img/enemies/komo/move/komo4.png",
   "assets/img/enemies/komo/move/komo5.png"
]



constructor(level){
    super(level);
    
    this.width = this.width * this.sizingFactor;
    this.height = this.height * this.sizingFactor;
    

    this.y = this.level.ground_y - this.height -10;
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