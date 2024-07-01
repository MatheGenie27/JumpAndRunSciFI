class InputHandler {
  character;
  world;
  keyboard;
  game;

  constructor(character) {
    this.character = character;
    this.world = this.character.world;
    this.game = this.world.game;
    this.keyboard = this.game.keyboard;
  }

  handleInput() {
    const { keyboard, character } = this;
    let anyKeyPressed = false;

    for (const key in keyboard) {
        if (!keyboard[key]) continue; // Skip if the key is not pressed

        anyKeyPressed = true; // At least one relevant key is pressed
        
        

      switch (key) {
        case "RIGHT":
          if (keyboard.RIGHT && !character.attack) {
            if (!character.isCrouch) {
              character.isRunning = true;
              
              character.moveRight();
            } else {
              
              character.crouchRight();
            }
          } 
          break;

        case "LEFT":
          if (keyboard.LEFT && !character.attack) {
            if (!character.isCrouch) {
                character.isRunning = true;
                character.moveLeft();
            } else {
              character.crouchLeft();
            }
          } 
          break;

        case "SPACE":
          character.isJump = keyboard.SPACE;
          character.jump();
          break;

        case "UP":
          character.isClimbing = keyboard.UP;
          break;

        case "D":
          character.isDead = keyboard.D;
          break;

        case "DOWN":
          character.isCrouch = keyboard.DOWN;
          
          break;

        case "G":
          character.gunDrawn = keyboard.G;
          break;

        case "H":
          character.gunDrawn = !keyboard.H;
          break;

        case "F":
          if (!keyboard.DOWN && !keyboard.UP && !keyboard.RIGHT && !keyboard.LEFT) {
            character.attack = keyboard.F;
          } 
          break;

        default:
          //character.isRunning=false;
                
          break;
      }


    }

    if(!anyKeyPressed){
       // console.log("KEINE TASTE GEDRÜCKT");
        character.isRunning=false;
        character.isCrouch=false;
        character.isClimbing=false;
        character.attack=false;
        
        character.attack=false;
        
        if (character.isJump){
          character.isIdle=false;
        } else {
          character.isIdle=true;
        }
        
        
        
    }

    

  }
}
