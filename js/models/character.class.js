class Character extends MovableObject {
  world;

  width = 150;
  height = 100;
  isWalking = false;
  gunDrawn = false;
  isDead = false;
  isJump = false;
  wasJumping = false;
  isCrouch = false;
  wasCrouching = false;
  isClimbing = false;
  attack = false;

  characterImages = new CharacterImages(this);
  animationManager = new AnimationManager(this);

  constructor(world) {
    super();
    this.characterImages.preloadImages();
    this.world = world;
    this.animate();
  }

  animate() {
    setInterval(() => {
      //this.walking_sound.pause();
      this.handleInput();

      //this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      this.animationManager.update();
    }, 1000 / 12);
  }

  handleInput() {
    if (this.world.game.keyboard.RIGHT) {
      // && this.x < this.world.level.level_end_x) {
      this.moveRight();
    }

    if (this.world.game.keyboard.LEFT && this.x > 0) {
      this.moveLeft();
      //this.walking_sound.play();
    }

    if (this.world.game.keyboard.SPACE) {
      //&& !this.isAboveGround()) {
      this.isJump = true;
      //this.jump();
    } else {
      this.isJump = false;
    }

    if (this.world.game.keyboard.UP) {
      this.isClimbing = true;
    } else {
      this.isClimbing = false;
    }

    if (this.world.game.keyboard.D) {
      this.isDead = true;
    }

    if (this.world.game.keyboard.DOWN) {
      this.isCrouch = true;
    } else {
      this.isCrouch = false;
    }

    if (this.world.game.keyboard.G) {
      this.gunDrawn = true;
    }
    if (this.world.game.keyboard.H) {
      this.gunDrawn = false;
    }

    if (this.world.game.keyboard.F){
      this.attack = true;
    } else {
      this.attack = false;
    }
  }
}
