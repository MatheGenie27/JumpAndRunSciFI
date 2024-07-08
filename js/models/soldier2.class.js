class Soldier2 extends Enemy {


    x=900;
    width=48;
    height=48;
    sizingFactor= 2;
    runSpeed = 1.8;


IMAGES_RUN = [
    "assets/img/enemies/soldier2/run/robo-soldier-run1.png",
    "assets/img/enemies/soldier2/run/robo-soldier-run2.png",
    "assets/img/enemies/soldier2/run/robo-soldier-run3.png",
    "assets/img/enemies/soldier2/run/robo-soldier-run4.png",
    "assets/img/enemies/soldier2/run/robo-soldier-run5.png",
    "assets/img/enemies/soldier2/run/robo-soldier-run6.png",
   
]

IMAGES_HURT= [
    "assets/img/enemies/soldier2/Hurt/soldier-hurt.png"
]

IMAGES_IDLE = [
    "assets/img/enemies/soldier2/idle/soldier-idle1.png",
    "assets/img/enemies/soldier2/idle/soldier-idle2.png",
    "assets/img/enemies/soldier2/idle/soldier-idle3.png",
    "assets/img/enemies/soldier2/idle/soldier-idle4.png"
]

IMAGES_CROUCH = [
    "assets/img/enemies/soldier2/crouch/soldier-crouch.png"
]




constructor(level){
    super(level);
    
    this.width = this.width * this.sizingFactor;
    this.height = this.height * this.sizingFactor;
    

    this.y = this.level.ground_y - this.height -10;
    this.loadImages(this.IMAGES_RUN);
    

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

             this.playAnimation(this.IMAGES_RUN);

          
          //console.log("isAboveGround: " +this.isAboveGround())
          //console.log("isJump: " +this.isJump);
    
        }, 1000 / 12);
}



}