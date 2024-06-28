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
        const { keyboard, character } = this;
    
        for (const key in keyboard) {
            switch (key) {
                case "RIGHT":
                    if (keyboard.RIGHT && !character.attack) {
                        if (!character.isCrouch) {
                            character.isRunning=true;
                            character.moveRight();
                        } else {
                            character.isCrouching=true;
                            character.crouchRight();
                        }
                    }else{
                        character.isRunning=false;
                        character.isCrouching=false;
                    }
                    break;
    
                case "LEFT":
                    if (keyboard.LEFT && !character.attack) {
                        if (!character.isCrouch) {
                            character.isRunning=true;
                            character.moveLeft();
                        } else {
                            character.isCrouching=true;
                            character.crouchLeft();
                        }
                    } else {
                        character.isRunning=false;
                        character.isCrouching=false;
                    }
                    break;
    
                case "SPACE":
                    character.isJump = keyboard.SPACE;
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
                    if (!keyboard.DOWN && !keyboard.UP) {
                        character.attack = keyboard.F;
                    } else {
                        character.attack = false;
                    }
                    break;
    
                default:
                    character.isIdle=true
                    break;
            }
        }
    }
    }
    
    

