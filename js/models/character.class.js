class Character extends MovableObject {
  world;

  width = 75;
  height = 48;
  sizingFactor = 2;
  runSpeed = 4;
  crouchSpeed = 2;
  isWalking = false;
  gunDrawn = false;
  isDead = false;
  isJump = false;
  wasJumping = false;
  isCrouch = false;
  isCrouching=false;
  wasCrouching = false;
  isClimbing = false;
  isRunning=false;
  attack = false;
  isIdle = true;
  
  

  characterImages; 
  animationManager ;
  inputHandler ;

  constructor(world) {
    super();
    
    
    
    this.width = this.width * this.sizingFactor;
    this.height = this.height * this.sizingFactor;
    this.characterImages= new CharacterImages(this);
    this.characterImages.preloadImages();
    this.world = world;
    this.animationManager= new AnimationManager(this);
    this.inputHandler = new InputHandler(this);



this.collisionBoxHandler = new CollisionBoxHandler(this);
this.cameraHandler = new CameraHandler(this);

    this.animate();
  }

  animate() {
    setInterval(() => {
      //this.walking_sound.pause();
      this.inputHandler.handleInput();
      
      
      //this.world.camera_x = -this.x + 100; <-- Notfall Kamera Reset
      this.cameraHandler.cameraHandling(); 
      this.collisionBoxHandler.runCollisionBox();
      
    }, 1000 / 60);

    setInterval(() => {
      this.animationManager.update();
    }, 1000 / 12);
  }

  

}