class InputHandler{
    character;
    world;
    keyboard;
    game;


    constructor(character){
        this.character = character;
        this.world = this.character.world;
        this.game = this.world.game;
        this.keyboard= this.game.keyboard;
     

    }

    handleInput() {
        if (this.keyboard.RIGHT && !this.character.attack) {
          // && this.x < this.world.level.level_end_x) {
          if (!this.character.isCrouch) {
            this.character.moveRight();
            //this.walking_sound.play();
          } else {
            this.character.crouchRight();
          }
        }
    
        if (this.keyboard.LEFT && !this.character.attack) { //&& this.character.x > 0) {
          if (!this.character.isCrouch) {
            this.character.moveLeft();
            //this.walking_sound.play();
          } else {
            this.character.crouchLeft();
          }
        }
    
        if (this.keyboard.SPACE) {
          //&& !this.isAboveGround()) {
          this.character.isJump = true;
          //this.jump();
        } else {
          this.character.isJump = false;
        }
    
        if (this.keyboard.UP) {
          this.character.isClimbing = true;
        } else {
          this.character.isClimbing = false;
        }
    
        if (this.keyboard.D) {
          this.character.isDead = true;
        }
    
        if (this.keyboard.DOWN) {
          this.character.isCrouch = true;
        } else {
          this.character.isCrouch = false;
        }
    
        if (this.keyboard.G) {
          this.character.gunDrawn = true;
        }
        if (this.keyboard.H) {
          this.character.gunDrawn = false;
        }
    
        if (this.keyboard.F && !this.keyboard.DOWN && !this.keyboard.UP ) {
          this.character.attack = true;
        } else {
          this.character.attack = false;
        }
      }
    }
    

