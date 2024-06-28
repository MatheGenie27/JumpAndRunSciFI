class Character extends MovableObject {
  world;

  width = 150;
  height = 100;
  runSpeed = 4;
  crouchSpeed = 2;
  isWalking = false;
  gunDrawn = false;
  isDead = false;
  isJump = false;
  wasJumping = false;
  isCrouch = false;
  wasCrouching = false;
  isClimbing = false;
  attack = false;
  

  characterImages; 
  animationManager ;
  inputHandler ;

  constructor(world) {
    super();
    this.characterImages= new CharacterImages(this);
    this.characterImages.preloadImages();
    this.world = world;
    this.animationManager= new AnimationManager(this);
    this.inputHandler = new InputHandler(this);
    this.cameraHandler = new CameraHandler(this);



    this.animate();
  }

  animate() {
    setInterval(() => {
      //this.walking_sound.pause();
      this.inputHandler.handleInput();
      
      
      //this.world.camera_x = -this.x + 100; <-- Notfall Kamera Reset
      this.cameraHandler.cameraHandling(); 
      
    }, 1000 / 60);

    setInterval(() => {
      this.animationManager.update();
    }, 1000 / 12);
  }

  

}