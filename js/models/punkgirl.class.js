class Punkgirl extends Enemy {

    x=700;
    width=64;
    height=64;
    sizingFactor = 1.5;
    runSpeed = 1.2;


        IMAGES_IDLE = [
"assets/img/enemies/punkGirl/Idle/punk-girl-idle1.png",
"assets/img/enemies/punkGirl/Idle/punk-girl-idle2.png",
"assets/img/enemies/punkGirl/Idle/punk-girl-idle3.png",
"assets/img/enemies/punkGirl/Idle/punk-girl-idle4.png"

        ]

        IMAGES_KICK = [
            "assets/img/enemies/punkGirl/Kick/punk-girl-kick1.png",
            "assets/img/enemies/punkGirl/Kick/punk-girl-kick2.png",
            "assets/img/enemies/punkGirl/Kick/punk-girl-kick3.png",
            "assets/img/enemies/punkGirl/Kick/punk-girl-kick4.png",
            "assets/img/enemies/punkGirl/Kick/punk-girl-kick5.png"
        ]

        IMAGES_WALK = [
            "assets/img/enemies/punkGirl/Walk/punk-girl-walk1.png",
            "assets/img/enemies/punkGirl/Walk/punk-girl-walk2.png",
            "assets/img/enemies/punkGirl/Walk/punk-girl-walk3.png",
            "assets/img/enemies/punkGirl/Walk/punk-girl-walk4.png"
            
        ]

        IMAGES_HURT = [
            "assets/img/enemies/punkGirl/Hurt/punk-girl-hurt1.png",
            "assets/img/enemies/punkGirl/Hurt/punk-girl-hurt2.png",
            "assets/img/enemies/punkGirl/Hurt/punk-girl-hurt3.png"
        ]








    constructor(level){
        super(level);
        this.width = this.width * this.sizingFactor;
        this.height = this.height * this.sizingFactor;
    

    this.y = this.level.ground_y - this.height -10;
    
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_KICK);
    this.loadImages(this.IMAGES_HURT);
    

    this.animate();
    this.applyGravity();

    }


    animate(){

        console.log("starte punk girl animation");
    
        setInterval(() => {
          //this.walking_sound.pause();

          //hier KI implementieren
          this.moveLeft();
          
          
          
          
          
          
        }, 1000 / 60);
    
        setInterval(() => {

             this.playAnimation(this.IMAGES_WALK);

          
          //console.log("isAboveGround: " +this.isAboveGround())
          //console.log("isJump: " +this.isJump);
    
        }, 1000 / 12);
}

}