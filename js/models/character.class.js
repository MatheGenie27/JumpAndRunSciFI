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

  IMAGES_IDLE = [
    "assets/img/character/Sprites/No-Helm/Idle/idle1.png",
    "assets/img/character/Sprites/No-Helm/Idle/idle1.png",
    "assets/img/character/Sprites/No-Helm/Idle/idle2.png",
    "assets/img/character/Sprites/No-Helm/Idle/idle2.png",
    "assets/img/character/Sprites/No-Helm/Idle/idle3.png",
    "assets/img/character/Sprites/No-Helm/Idle/idle3.png",
    "assets/img/character/Sprites/No-Helm/Idle/idle4.png",
    "assets/img/character/Sprites/No-Helm/Idle/idle4.png",
  ];

  IMAGES_IDLE_GUN = [
    "assets/img/character/Sprites/No-Helm/idle gun/idle-gun1.png",
    "assets/img/character/Sprites/No-Helm/idle gun/idle-gun1.png",
    "assets/img/character/Sprites/No-Helm/idle gun/idle-gun2.png",
    "assets/img/character/Sprites/No-Helm/idle gun/idle-gun2.png",
    "assets/img/character/Sprites/No-Helm/idle gun/idle-gun3.png",
    "assets/img/character/Sprites/No-Helm/idle gun/idle-gun3.png",
    "assets/img/character/Sprites/No-Helm/idle gun/idle-gun4.png",
    "assets/img/character/Sprites/No-Helm/idle gun/idle-gun4.png",
  ];

  IMAGES_RUN = [
    "assets/img/character/Sprites/No-Helm/run/run1.png",
    "assets/img/character/Sprites/No-Helm/run/run2.png",
    "assets/img/character/Sprites/No-Helm/run/run3.png",
    "assets/img/character/Sprites/No-Helm/run/run4.png",
    "assets/img/character/Sprites/No-Helm/run/run5.png",
    "assets/img/character/Sprites/No-Helm/run/run6.png",
    "assets/img/character/Sprites/No-Helm/run/run7.png",
    "assets/img/character/Sprites/No-Helm/run/run8.png",
    "assets/img/character/Sprites/No-Helm/run/run9.png",
    "assets/img/character/Sprites/No-Helm/run/run10.png",
  ];

  IMAGES_RUN_GUN = [
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun1.png",
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun2.png",
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun3.png",
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun4.png",
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun5.png",
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun6.png",
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun7.png",
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun8.png",
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun9.png",
    "assets/img/character/Sprites/No-Helm/run-with-gun/run-with-gun10.png",
  ];

  IMAGES_DIE = [
    "assets/img/character/Sprites/No-Helm/die/die1.png",
    "assets/img/character/Sprites/No-Helm/die/die2.png",
    "assets/img/character/Sprites/No-Helm/die/die3.png",
  ];

  IMAGES_JUMP = [
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun1.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun2.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun3.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun4.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun5.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun6.png",
  ];

  IMAGES_DE_JUMP = [
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun6.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun5.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun4.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun3.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun2.png",
    "assets/img/character/Sprites/No-Helm/jump-no-gun/jump-no-gun1.png",
  ];

  IMAGES_JUMP_GUN = [
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun1.png",
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun2.png",
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun3.png",
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun4.png",
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun5.png",
  ];

  IMAGES_DE_JUMP_GUN = [
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun5.png",
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun4.png",
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun3.png",
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun2.png",
    "assets/img/character/Sprites/No-Helm/jump-gun/jump-gun1.png",
  ];

  IMAGES_SHOOT = [
    "assets/img/character/Sprites/No-Helm/shoot/shoot1.png",
    "assets/img/character/Sprites/No-Helm/shoot/shoot2.png",
  ];

  IMAGES_THROW = [
    "assets/img/character/Sprites/No-Helm/Throw/throw1.png",
    "assets/img/character/Sprites/No-Helm/Throw/throw2.png",
    "assets/img/character/Sprites/No-Helm/Throw/throw3.png",
    "assets/img/character/Sprites/No-Helm/Throw/throw4.png",
    "assets/img/character/Sprites/No-Helm/Throw/throw5.png",
    "assets/img/character/Sprites/No-Helm/Throw/throw6.png",
    "assets/img/character/Sprites/No-Helm/Throw/throw7.png",
    "assets/img/character/Sprites/No-Helm/Throw/throw8.png",
  ];

  IMAGES_CLIMB = [
    "assets/img/character/Sprites/No-Helm/climb/climb1.png",
    "assets/img/character/Sprites/No-Helm/climb/climb2.png",
    "assets/img/character/Sprites/No-Helm/climb/climb3.png",
    "assets/img/character/Sprites/No-Helm/climb/climb4.png",
    "assets/img/character/Sprites/No-Helm/climb/climb5.png",
    "assets/img/character/Sprites/No-Helm/climb/climb6.png",
  ];

  IMAGES_CROUCH = [
    "assets/img/character/Sprites/No-Helm/crouch/crouch1.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch1.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch2.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch2.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch3.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch3.png",
  ];

  IMAGES_DECROUCH = [
    "assets/img/character/Sprites/No-Helm/crouch/crouch3.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch2.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch2.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch2.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch1.png",
    "assets/img/character/Sprites/No-Helm/crouch/crouch1.png",
  ];

  IMAGES_CROUCH_GUN = [
    "assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun1.png",
    "assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun2.png",
    "assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun3.png",
  ];

  IMAGES_DECROUCH_GUN = [
    "assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun3.png",
    "assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun2.png",
    "assets/img/character/Sprites/No-Helm/crouch-gun/crouch-gun1.png",
  ];

  IMAGES_CROUCH_SHOOT = [
    "assets/img/character/Sprites/No-Helm/crouch-shoot/crouch-shoot1.png",
    "assets/img/character/Sprites/No-Helm/crouch-shoot/crouch-shoot2.png",
  ];

  IMAGES_CRAWL = [
    "assets/img/character/Sprites/No-Helm/Crawl/crawl1.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl1.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl2.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl2.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl3.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl3.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl4.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl4.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl5.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl5.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl6.png",
    "assets/img/character/Sprites/No-Helm/Crawl/crawl6.png",
  ];

  IMAGE_CRAWL = [this.IMAGES_CRAWL[0]];

  constructor(world) {
    super().loadImage("assets/img/character/Sprites/No-Helm/Idle/idle1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_IDLE_GUN);
    this.loadImages(this.IMAGES_RUN);
    this.loadImages(this.IMAGES_DIE);
    this.loadImages(this.IMAGES_JUMP);
    this.loadImages(this.IMAGES_CROUCH);
    this.loadImages(this.IMAGES_CRAWL);
    this.loadImages(this.IMAGES_DECROUCH);
    this.loadImages(this.IMAGES_JUMP_GUN);
    this.loadImages(this.IMAGES_RUN_GUN);
    this.loadImages(this.IMAGES_CLIMB);
    this.loadImages(this.IMAGES_DE_JUMP);
    this.loadImages(this.IMAGES_DE_JUMP_GUN);
    this.loadImages(this.IMAGES_THROW);
    this.loadImages(this.IMAGES_SHOOT);
    this.world = world;
    this.animate();
  }

  animate() {
    setInterval(() => {
      //this.walking_sound.pause();

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

      //this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead && !this.isPlayingDieAnimation) {
        // Starte Die-Animation, wenn der Charakter tot ist
        this.isPlayingDieAnimation = true;
        this.currentDieFrame = 0;
        this.playAnimation(this.IMAGES_DIE);
      } else if (this.isPlayingDieAnimation) {
        // Halte auf dem letzten Bild der Die-Animation an
        if (this.currentDieFrame < this.IMAGES_DIE.length - 1) {
          this.currentDieFrame++;
        }
        this.img = this.imageCache[this.IMAGES_DIE[this.currentDieFrame]];
      } else if (this.isHurt()) {
        // Spiele die Hurt-Animation ab
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isJump && !this.isPlayingJumpAnimation) {
        // Starte Jump-Animation, wenn der Charakter springt
        this.isPlayingJumpAnimation = true;
        this.currentJumpFrame = 0;
        if (!this.gunDrawn) {
          this.playAnimation(this.IMAGES_JUMP);
        } else {
          this - this.playAnimation(this.IMAGES_DE_JUMP_GUN);
        }
      } else if (this.isPlayingJumpAnimation) {
        // Wenn Jump-Animation läuft, halte auf dem letzten Bild an
        if (
          this.currentJumpFrame <
          (this.gunDrawn
            ? this.IMAGES_JUMP_GUN.length
            : this.IMAGES_JUMP.length) -
            1
        ) {
          this.currentJumpFrame++;
        }
        this.img =
          this.imageCache[
            this.gunDrawn
              ? this.IMAGES_JUMP_GUN[this.currentJumpFrame]
              : this.IMAGES_JUMP[this.currentJumpFrame]
          ];

        // Überprüfe, ob der Sprung beendet ist 
        if (!this.isJump) {
          this.isPlayingJumpAnimation = false;
          this.isPlayingDEJUMPAnimation = true;
          this.currentDEJUMPFrame = 0;

          if (!this.gunDrawn) {
            this.playAnimation(this.IMAGES_DE_JUMP);
          } else {
            this.playAnimation(this.IMAGES_DE_JUMP_GUN);
          }
        }
      } else if (this.isPlayingDEJUMPAnimation) {
        // Wenn DE_JUMP-Animation läuft, halte auf dem letzten Bild an
        if (
          this.currentDEJUMPFrame <
          (this.gunDrawn
            ? this.IMAGES_DE_JUMP_GUN.length
            : this.IMAGES_DE_JUMP.length) -
            1
        ) {
          this.currentDEJUMPFrame++;
        }
        this.img =
          this.imageCache[
            this.gunDrawn
              ? this.IMAGES_DE_JUMP_GUN[this.currentDEJUMPFrame]
              : this.IMAGES_DE_JUMP[this.currentDEJUMPFrame]
          ];

        // Überprüfe, ob DE_JUMP-Animation abgeschlossen ist
        if (
          this.currentDEJUMPFrame ===
          (this.gunDrawn
            ? this.IMAGES_DE_JUMP_GUN.length
            : this.IMAGES_DE_JUMP.length) -
            1
        ) {
          // Setze Zustände und Steuerungsvariablen zurück
          this.isPlayingDEJUMPAnimation = false;
          this.isJump = false;
          // Setze andere Zustände zurück oder aktualisiere je nach Bedarf
        }
      } else if (this.isClimbing) {
        this.playAnimation(this.IMAGES_CLIMB);
      } else if (
        this.world.game.keyboard.F &&
        this.gunDrawn &&
        !this.isCrouch
      ) {
        // Starte SHOOT-Animation, wenn F gedrückt wird und gunDrawn true ist
        this.playAnimation(this.IMAGES_SHOOT);
      } else if (
        this.world.game.keyboard.F &&
        !this.gunDrawn &&
        !this.isCrouch
      ) {
        // Starte SHOOT-Animation, wenn F gedrückt wird und gunDrawn true ist
        this.playAnimation(this.IMAGES_THROW);
      } else {
        // Handle andere Zustände wie Idle, Run, Crouch, etc.
        if (this.isCrouch) {
          if (!this.wasCrouching) {
            this.playAnimation(this.IMAGES_CROUCH);
            this.wasCrouching = true;
          } else {
            // Wenn nach links oder rechts bewegt wird, spiele CRAWL Animation ab
            if (
              this.world.game.keyboard.LEFT ||
              this.world.game.keyboard.RIGHT
            ) {
              this.playAnimation(this.IMAGES_CRAWL);
            } else {
              this.img = this.imageCache[this.IMAGES_CRAWL[0]]; // Zeige das erste Bild der CRAWL Animation
            }
          }
        } else {
          if (this.wasCrouching) {
            this.playAnimation(this.IMAGES_DECROUCH);
            this.wasCrouching = false;
          }

          if (this.world.game.keyboard.RIGHT || this.world.game.keyboard.LEFT) {
            if (!this.gunDrawn) {
              this.playAnimation(this.IMAGES_RUN);
            } else {
              this.playAnimation(this.IMAGES_RUN_GUN);
            }
          } else {
            if (!this.gunDrawn) {
              this.playAnimation(this.IMAGES_IDLE);
            } else {
              this.playAnimation(this.IMAGES_IDLE_GUN);
            }
          }
        }
      }
    }, 1000 / 12);
  }
}
