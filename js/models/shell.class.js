class Shell extends Enemy {
    x=500;
    width=51;
    height=40;
    sizingFactor= 1.3;
    runSpeed = 0.2;


IMAGES_MOVE = [
    "assets/img/enemies/shell/move/move1.png",
    "assets/img/enemies/shell/move/move2.png",
    "assets/img/enemies/shell/move/move3.png",
    "assets/img/enemies/shell/move/move4.png",
    "assets/img/enemies/shell/move/move5.png"
]



constructor(ground_y){
    super();
    
    this.width = this.width * this.sizingFactor;
    this.height = this.height * this.sizingFactor;
    

    this.y = ground_y - this.height -10;
    this.loadImages(this.IMAGES_MOVE);
    this.applyGravity();

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

