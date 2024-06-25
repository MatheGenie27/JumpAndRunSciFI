class MovableObject extends DrawableObject {
    
     
    speed; 
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    offsetY = 0;
    energy = 100;
    lastHit = 0;


    isAboveGround(){
        if ((this instanceof throwableObject)){ 
            return true;
        } else {
        return this.y < 130;}

    }

    applyGravity(){
        
        setInterval(() => {



                if(this.isAboveGround() || this.speedY > 0){

            
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                }
        }, 1000 / 25) 
     }    
    
    


    

    


    

    


    isColliding (obj) {
        console.log("isColliding wird aufgerufen");
        return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
                (this.y + this.offsetY + this.height) >= obj.y &&
                (this.y + this.offsetY) <= (obj.y + obj.height) && 
                obj.onCollisionCourse; 
                
                // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. 
                //Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    alternativeIsColliding(mo){
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    loseEnergy(hit){
        console.log("losing energy: ",+hit);
        this.energy -= hit;
        if (this.energy <0){
            this.energy=0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timespassed = new Date().getTime() - this.lastHit;
        timespassed = timespassed / 1000;
        return timespassed < 1;
    }

    isDead(){
        return this.energy==0;
    }

    flipImage(ctx){
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1,1);
        this.x = this.x * -1;
    }

    flipImageBack(ctx){
        this.x = this.x * -1;
        ctx.restore();
    }


    moveRight(){
        this.x += this.speed;
        this.otherDirection=false;
        this.walking_sound.play();
    }

    moveLeft(){
        
            this.x -= this.speed;
    }

    jump(){
        console.log("JUMP in MO");
        this.speedY = 25;
   }


    
}

