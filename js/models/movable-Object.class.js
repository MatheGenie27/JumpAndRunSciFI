class MovableObject extends DrawableObject {
  runSpeed;
  crouchSpeed;
  otherDirection = false;
  speedY = 0;
  acceleration = 1;
  offsetY = 0;
  energy = 100;
  lastHit = 0;

  isAboveGround() {
    //if ((this instanceof throwableObject)){
    //    return true;
    // } else {
    if ((this instanceof Character)){
      //console.log("is above Ground" +this.y > this.world.level.ground_y)
      //console.log("Character Y :" +this.y);
      //console.log(this.world.level.ground_y +"  " +this.y);
      //console.log(this.y+this.height+20 < this.world.level.ground_y);
      return (this.y+this.height+20 < this.world.level.ground_y);
    } //else {}
    //return this.y < 130;
    //}
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        //console.log("gravitation beschleunigt, da Objekt über Boden");
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      } else {
        
        
        
      }
      //console.log("speedY: "+this.speedY);
    }, 1000 / 30); 
  }
  
  

  isColliding(obj) {
    console.log("isColliding wird aufgerufen");
    return (
      this.x + this.width >= obj.x &&
      this.x <= obj.x + obj.width &&
      this.y + this.offsetY + this.height >= obj.y &&
      this.y + this.offsetY <= obj.y + obj.height &&
      obj.onCollisionCourse
    );

    // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt.
    //Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
  }

  alternativeIsColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  loseEnergy(hit) {
    console.log("losing energy: ", +hit);
    this.energy -= hit;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timespassed = new Date().getTime() - this.lastHit;
    timespassed = timespassed / 1000;
    return timespassed < 1;
  }

  isDead() {
    return this.energy == 0;
  }

 



  
  flipImage(ctx) {
    ctx.save();
    ctx.translate(this.width, 0);
    ctx.scale(-1, 1);
    this.x = this.x * -1;
  }

  flipImageBack(ctx) {
    this.x = this.x * -1;
    ctx.restore();
  }
  

  moveRight() {
    this.x += this.runSpeed;
    this.otherDirection = false;
    //this.walking_sound.play();
  }

  crouchRight(){
    this.x += this.crouchSpeed;
    this.otherDirection = false;
  }

  moveLeft() {
    this.otherDirection = true;
    this.x -= this.runSpeed;
         
  }

  crouchLeft(){
    this.otherDirection = true;
    this.x -= this.crouchSpeed;
  }

  jump() {
    //console.log("JUMP in MO"); 
    if(this instanceof Character && !this.isAboveGround()){
    this.speedY = 13;
    }
    }
    
  
}
