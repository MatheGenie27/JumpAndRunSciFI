class Character extends MovableObject {
  world;

  width = 150;
  height = 100;
  isWalking=false; 
  gunDrawn=false;
  isDead=false;
  isJump=false;
  isCrouch=false;
  
  IMAGES_IDLE = [
    'assets/img/character/Sprites/No-Helm/Idle/idle1.png',
    'assets/img/character/Sprites/No-Helm/Idle/idle2.png',
    'assets/img/character/Sprites/No-Helm/Idle/idle3.png',
    'assets/img/character/Sprites/No-Helm/Idle/idle4.png'
  ]

  IMAGES_IDLE_GUN= [
    'assets/img/character/Sprites/No-Helm/idle gun/idle-gun1.png',
    'assets/img/character/Sprites/No-Helm/idle gun/idle-gun2.png',
    'assets/img/character/Sprites/No-Helm/idle gun/idle-gun3.png',
    'assets/img/character/Sprites/No-Helm/idle gun/idle-gun4.png',
  ]

  IMAGES_RUN = [
    'assets/img/character/Sprites/No-Helm/run/run1.png',
    'assets/img/character/Sprites/No-Helm/run/run2.png',
    'assets/img/character/Sprites/No-Helm/run/run3.png',
    'assets/img/character/Sprites/No-Helm/run/run4.png',
    'assets/img/character/Sprites/No-Helm/run/run5.png',
    'assets/img/character/Sprites/No-Helm/run/run6.png',
    'assets/img/character/Sprites/No-Helm/run/run7.png',
    'assets/img/character/Sprites/No-Helm/run/run8.png',
    'assets/img/character/Sprites/No-Helm/run/run9.png',
    'assets/img/character/Sprites/No-Helm/run/run10.png'
  ]

  IMAGES_RUN_GUN = [
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun1.png',
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun2.png',
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun3.png',
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun4.png',
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun5.png',
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun6.png',
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun7.png',
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun8.png',
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun9.png',
    'assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun10.png'
    
  ]

  IMAGES_DIE = [
    'assets/img/character/Sprites/No-Helm/die/die1.png',
    'assets/img/character/Sprites/No-Helm/die/die2.png',
    'assets/img/character/Sprites/No-Helm/die/die3.png'
    
  ]

  IMAGES_JUMP = [
    'assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun1.png',
    'assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun2.png',
    'assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun3.png',
    'assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun4.png',
    'assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun5.png',
  ]

  IMAGES_JUMP_GUN = [
    'assets/img/character/Sprites/No-Helm/jump-gun/jump-gun1.png',
    'assets/img/character/Sprites/No-Helm/jump-gun/jump-gun2.png',
    'assets/img/character/Sprites/No-Helm/jump-gun/jump-gun3.png',
    'assets/img/character/Sprites/No-Helm/jump-gun/jump-gun4.png',
    'assets/img/character/Sprites/No-Helm/jump-gun/jump-gun5.png'


  ]

  IMAGES_SHOOT = [
    'assets/img/character/Sprites/No-Helm/shoot/shoot1.png',
    'assets/img/character/Sprites/No-Helm/shoot/shoot2.png'
  ]

  IMAGES_THROW = [
    'assets/img/character/Sprites/No-Helm/Throw/throw1.png',
    'assets/img/character/Sprites/No-Helm/Throw/throw2.png',
    'assets/img/character/Sprites/No-Helm/Throw/throw3.png',
    'assets/img/character/Sprites/No-Helm/Throw/throw4.png',
    'assets/img/character/Sprites/No-Helm/Throw/throw5.png',
    'assets/img/character/Sprites/No-Helm/Throw/throw6.png',
    'assets/img/character/Sprites/No-Helm/Throw/throw7.png',
    'assets/img/character/Sprites/No-Helm/Throw/throw8.png'
  ]

  IMAGES_CLIMB = [
    'assets/img/character/Sprites/No-Helm/climb/climb1.png',
    'assets/img/character/Sprites/No-Helm/climb/climb2.png',
    'assets/img/character/Sprites/No-Helm/climb/climb3.png',
    'assets/img/character/Sprites/No-Helm/climb/climb4.png',
    'assets/img/character/Sprites/No-Helm/climb/climb5.png',
    'assets/img/character/Sprites/No-Helm/climb/climb6.png'
  ]


  IMAGES_CROUCH = [
    'assets/img/character/Sprites/No-Helm/crouch/crouch1.png',
    'assets/img/character/Sprites/No-Helm/crouch/crouch2.png',
    'assets/img/character/Sprites/No-Helm/crouch/crouch3.png'
  ]

  IMAGES_DECROUCH = [
    'assets/img/character/Sprites/No-Helm/crouch/crouch3.png',
    'assets/img/character/Sprites/No-Helm/crouch/crouch2.png',
    'assets/img/character/Sprites/No-Helm/crouch/crouch1.png'
  ]

  IMAGES_CROUCH_GUN = [
    'assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun1.png',
    'assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun2.png',
    'assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun3.png'
  ]

  IMAGES_DECROUCH_GUN = [
    'assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun3.png',
    'assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun2.png',
    'assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun1.png'
  ]

  IMAGES_CROUCH_SHOOT = [
    'assets/img/character/Sprites/No-Helm/crouch-shoot/crouch-shoot1.png',
    'assets/img/character/Sprites/No-Helm/crouch-shoot/crouch-shoot2.png'
  ]

  IMAGES_CRAWL =  [
    'assets/img/character/Sprites/No-Helm/Crawl/crawl1.png',
    'assets/img/character/Sprites/No-Helm/Crawl/crawl2.png',
    'assets/img/character/Sprites/No-Helm/Crawl/crawl3.png',
    'assets/img/character/Sprites/No-Helm/Crawl/crawl4.png',
    'assets/img/character/Sprites/No-Helm/Crawl/crawl5.png',
    'assets/img/character/Sprites/No-Helm/Crawl/crawl6.png'
  ]




  constructor(world) {
    super().loadImage("assets/img/character/Sprites/No-Helm/Idle/idle1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_RUN);
    this.loadImages(this.IMAGES_DIE);
    this.loadImages(this.IMAGES_JUMP);
    this.loadImages(this.IMAGES_CROUCH);
    this.world = world;
    this.animate();
  }

  animate() {
    setInterval(() => {
      //this.walking_sound.pause();

      if (this.world.game.keyboard.RIGHT ){  // && this.x < this.world.level.level_end_x) {
        this.moveRight();

      }

      if (this.world.game.keyboard.LEFT && this.x > 0) {
        
        this.moveLeft();
        //this.walking_sound.play();
      }

      if (this.world.game.keyboard.SPACE){ //&& !this.isAboveGround()) {
        this.isJump=true;
        //this.jump();
      }

      if(this.world.game.keyboard.D){
        this.isDead = true;
      }

      if(this.world.game.keyboard.DOWN){
        this.isCrouch=true;
      }

      //this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead){//(this.isDead()) {
        this.playAnimation(this.IMAGES_DIE);
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if(this.isJump){ //(this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMP);
        
      } else if(this.world.game.keyboard.RIGHT || this.world.game.keyboard.LEFT) {
        
        if(!this.gunDrawn){this.playAnimation(this.IMAGES_RUN);}
      } else if(this.isDead){
        this.playAnimation(this.IMAGES_DIE);
      } else if(this.isCrouch){
        this.playAnimation(this.IMAGES_CROUCH);
      }
      else

      {
        this.playAnimation(this.IMAGES_IDLE); 
      }
    }, 1000 / 10);
  }
}
