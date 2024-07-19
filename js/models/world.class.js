class World {
  game;
  level;
  character;
  enemies = [];
  ctx;
  camera_x = 0;

  constructor(game) {
    this.game = game;
    this.ctx = this.game.context;

    console.log("Welt initialisiert.");
    //scriptCom();

    this.run();
  }

  declareLevel(){
    this.level = level1;
  }

  initCharacter() {
    this.character = new Character(this);
  }

  run() {
    console.log("world is running");

    setInterval(() => {
      this.checkCollisions();
      //this.checkThrowObjects();
    }, 1000 / 5);
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      //if(this.character.alternativeIsColliding(enemy)){
      //   console.log("Collision with Character: " ,this.character.energy, enemy);
      //    this.character.loseEnergy(5);
      //    this.statusBar.setPercentage(this.character.energy);
      //}
    });
  }

  draw() {
    this.ctx.translate(this.camera_x, 0); //forward

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.floorObjects);
    //this.addObjectsToMap(this.level.clouds);

    this.addToMap(this.character);
    if(this.character){
    this.character.collisionBoxHandler.showCollisionBox(this.ctx);
    }
    this.addObjectsToMap(this.level.enemies);
    //this.addObjectsToMap(this.throwableObjects);
    //this.addObjectsToMap(this.shotObjects);

    this.addObjectsToMap(this.level.foregroundObjects);

    this.ctx.translate(-this.camera_x, 0); //back
    // ----------  Space for fixed Objects -------
    //this.addToMap(this.statusBar);
    this.ctx.translate(this.camera_x, 0); //forward

    this.ctx.translate(-this.camera_x, 0); // back
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo) {
      if (mo.otherDirection) {
        mo.flipImage(this.ctx);
      }

      mo.draw(this.ctx);
      mo.showSpriteBox(this.ctx);
      //mo.showCollisionBox(this.ctx);

      if (mo.otherDirection) {
        mo.flipImageBack(this.ctx);
      }
    }
  }
}
