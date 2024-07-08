class BigPedal extends Enemy {
    
        x=500;
        width=80;
        height=64;
        sizingFactor= 2;
        runSpeed = 0.625;
    
    
    IMAGES_WALK = [
        "assets/img/enemies/bigpedal/walk/bipedal-unit1.png",
        "assets/img/enemies/bigpedal/walk/bipedal-unit2.png",
        "assets/img/enemies/bigpedal/walk/bipedal-unit3.png",
        "assets/img/enemies/bigpedal/walk/bipedal-unit4.png",
        "assets/img/enemies/bigpedal/walk/bipedal-unit5.png",
        "assets/img/enemies/bigpedal/walk/bipedal-unit6.png",
        "assets/img/enemies/bigpedal/walk/bipedal-unit7.png"
    ]
    
    
    
    constructor(level){
        super(level);
        
        this.width = this.width * this.sizingFactor;
        this.height = this.height * this.sizingFactor;
        
    
        this.y = this.level.ground_y - this.height -10;
        this.loadImages(this.IMAGES_WALK);
        
    
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
    
                 this.playAnimation(this.IMAGES_WALK);
    
              
              //console.log("isAboveGround: " +this.isAboveGround())
              //console.log("isJump: " +this.isJump);
        
            }, 1000 / 7);
    }
}