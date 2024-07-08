class RoboSoldier extends Enemy {
    x=800;
    width=48;
    height=48;
    sizingFactor= 2;
    runSpeed = 2.1;


IMAGES_RUN = [
    "assets/img/enemies/robosoldier/run/robo-soldier1.png",
    "assets/img/enemies/robosoldier/run/robo-soldier2.png",
    "assets/img/enemies/robosoldier/run/robo-soldier3.png",
    "assets/img/enemies/robosoldier/run/robo-soldier4.png",
    "assets/img/enemies/robosoldier/run/robo-soldier5.png",
    "assets/img/enemies/robosoldier/run/robo-soldier6.png",

]

IMAGES_IDLE = [
    "assets/img/enemies/robosoldier/idle/robo-soldier-idle1.png",
    "assets/img/enemies/robosoldier/idle/robo-soldier-idle2.png",
    "assets/img/enemies/robosoldier/idle/robo-soldier-idle3.png",
    "assets/img/enemies/robosoldier/idle/robo-soldier-idle4.png",
]

IMAGES_HURT= [
    "assets/img/enemies/robosoldier/hurt/robo-soldier-hurt.png"
]

IMAGES_CROUCH = [
    "assets/img/enemies/robosoldier/Crouch/robo-soldier-crouch.png"
]

IMAGES_JUMP = [
    "assets/img/enemies/robosoldier/Jump/robo-soldier-jump.png"
]

IMAGES_FALL = [
    "assets/img/enemies/robosoldier/Jump/robo-soldier-jump.png"
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