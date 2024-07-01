class AnimationManager {
    constructor(character) {
      this.character = character;
      this.isPlayingDieAnimation = false;
      this.isPlayingJumpAnimation = false;
      this.isPlayingDeJumpAnimation = false;
      this.currentDieFrame = 0;
      this.currentJumpFrame = 0;
      this.currentDeJumpFrame = 0;
      this.wasCrouching = false;
      this.isLanded=false;
    }
  
    update() {
      let animationState = this.determineState();
      this.playAnimation(animationState);
    }
  
    determineState() {
      if (this.character.isDead) return 'dead'; 
      if (this.character.isHurt()) return 'hurt';
      if (this.character.isJump && !this.isPlayingJumpAnimation) return 'startJump';
      if (this.isPlayingJumpAnimation) return 'jump';
      if (this.isPlayingDeJumpAnimation && !this.character.isJump) return 'deJump';
      if (this.character.isClimbing) return 'climb';
      if (this.character.isCrouch) return 'crouch';
      if (this.character.attack && this.character.gunDrawn) return 'shoot';
      if (this.character.attack && !this.character.gunDrawn) return 'throw';
      if (this.character.world.game.keyboard.RIGHT || this.character.world.game.keyboard.LEFT) return this.character.gunDrawn ? 'runGun' : 'run';
      return this.character.gunDrawn ? 'idleGun' : 'idle';
    }
  
    playAnimation(state) {
      switch (state) {
        case 'dead':
          this.playDieAnimation();
          break;
        case 'hurt':
          this.character.playAnimation(this.character.characterImages.IMAGES_HURT);
          break;
        case 'startJump':
          this.startJumpAnimation();
          break;
        case 'jump':
          this.playJumpAnimation();
          break;
        case 'deJump':
          this.playDeJumpAnimation();
          break;
        case 'climb':
          this.character.playAnimation(this.character.characterImages.IMAGES_CLIMB);
          break;
        case 'crouch':
          this.playCrouchAnimation();
          break;
        case 'shoot':
          this.character.playAnimation(this.character.characterImages.IMAGES_SHOOT);
          break;
        case 'throw':
          this.character.playAnimation(this.character.characterImages.IMAGES_THROW);
          break;
        case 'run':
          this.character.playAnimation(this.character.characterImages.IMAGES_RUN);
          break;
        case 'runGun':
          this.character.playAnimation(this.character.characterImages.IMAGES_RUN_GUN);
          break;
        case 'idle':
          this.character.playAnimation(this.character.characterImages.IMAGES_IDLE);
          break;
        case 'idleGun':
          this.character.playAnimation(this.character.characterImages.IMAGES_IDLE_GUN);
          break;
      }
    }
  
    playDieAnimation() {
      if (!this.isPlayingDieAnimation) {
        this.isPlayingDieAnimation = true;
        this.currentDieFrame = 0;
        this.character.playAnimation(this.character.characterImages.IMAGES_DIE);
      } else {
        if (this.currentDieFrame < this.character.characterImages.IMAGES_DIE.length - 1) {
          this.currentDieFrame++;
        }
        this.character.img = this.character.imageCache[this.character.characterImages.IMAGES_DIE[this.currentDieFrame]];
      }
    }
  
    startJumpAnimation() {
      
      this.isPlayingJumpAnimation = true;
      this.isLanded = false;
      this.currentJumpFrame = 0;
      this.character.playAnimation(this.character.gunDrawn ? this.character.characterImages.IMAGES_JUMP_GUN : this.character.characterImages.IMAGES_JUMP);
      
    }
  
    playJumpAnimation() {
      if (this.currentJumpFrame < (this.character.gunDrawn ? this.character.characterImages.IMAGES_JUMP_GUN.length : this.character.characterImages.IMAGES_JUMP.length) - 1) {
        this.currentJumpFrame++;
      }
      this.character.img = this.character.imageCache[this.character.gunDrawn ? this.character.characterImages.IMAGES_JUMP_GUN[this.currentJumpFrame] : this.character.characterImages.IMAGES_JUMP[this.currentJumpFrame]];
  
      if (!this.character.isJump) {
        this.isPlayingJumpAnimation = false;
        this.isLanded=true;
        this.isPlayingDeJumpAnimation = true;
        this.currentDeJumpFrame = 0;
        this.character.playAnimation(this.character.gunDrawn ? this.character.characterImages.IMAGES_DE_JUMP_GUN : this.character.characterImages.IMAGES_DE_JUMP);
      }
    }
  
    playDeJumpAnimation() {
      if (this.currentDeJumpFrame < (this.character.gunDrawn ? this.character.characterImages.IMAGES_DE_JUMP_GUN.length : this.character.characterImages.IMAGES_DE_JUMP.length) - 1) {
        this.currentDeJumpFrame++;
      }
      this.character.img = this.character.imageCache[this.character.gunDrawn ? this.character.characterImages.IMAGES_DE_JUMP_GUN[this.currentDeJumpFrame] : this.character.characterImages.IMAGES_DE_JUMP[this.currentDeJumpFrame]];
  
      if (this.currentDeJumpFrame === (this.character.gunDrawn ? this.character.characterImages.IMAGES_DE_JUMP_GUN.length : this.character.characterImages.IMAGES_DE_JUMP.length) - 1) {
        this.isPlayingDeJumpAnimation = false;
        this.character.isJump = false;
        this.isLanded = false;
      }
    }
  
    playCrouchAnimation() {
      if (!this.wasCrouching) {
        this.character.playAnimation(this.character.characterImages.IMAGES_CROUCH);
        this.wasCrouching = true;
      } else {
        if (this.character.world.game.keyboard.LEFT || this.character.world.game.keyboard.RIGHT) {
          this.character.playAnimation(this.character.characterImages.IMAGES_CRAWL);
        } else {
          this.character.img = this.character.imageCache[this.character.characterImages.IMAGES_CRAWL[0]];
        }
      }
    }
  }