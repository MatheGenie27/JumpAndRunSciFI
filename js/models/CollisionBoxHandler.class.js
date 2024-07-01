class CollisionBoxHandler{

    character;
    collision_x;
    collision_y;
    collsion_width;
    collision_height;



    constructor(character){
        this.character = character;
        this.checkCollisionBoxCoordinates();
        
    }

    runCollisionBox(){
        //console.log("collisionX = " +this.collision_x);
        //console.log("CharacterX = " +this.character.x );
        //console.log("collisionW = " +this.collision_width);
        //console.log("CharacterW = " +this.character.width );
        this.checkCollisionBoxCoordinates();
    }    

    updateCollisionBox(x,y,w,h){
        this.collision_x = x;
        this.collision_y= y;
        this.collision_height= h;
        this.collision_width= w;

    }



    showCollisionBox(ctx){
        //console.log("SHOW COLLISION BOX");
        
          ctx.beginPath();
          ctx.lineWidth = '1.5';
          ctx.strokeStyle = 'red';
          ctx.rect(this.collision_x,this.collision_y,this.collision_width,this.collision_height);
          ctx.stroke();
          
      }


      checkCollisionBoxCoordinates(){
            if (this.character.isIdle){
                //console.log("is Idle");
                let w = this.character.width/(1.5*this.character.sizingFactor);
                let h = this.character.height-(7.5*this.character.sizingFactor);
                let x = this.character.x+(25*this.character.sizingFactor);
                let y = this.character.y+(7.5 * this.character.sizingFactor);
                this.updateCollisionBox(x,y,w,h);
            }

            if (this.character.isRunning){
                //console.log("is Running");
                let w = this.character.width/(1.5* this.character.sizingFactor);
                let h = this.character.height-(11 * this.character.sizingFactor);
                let x = this.character.x+(25*this.character.sizingFactor);
                let y = this.character.y+(11*this.character.sizingFactor);
                this.updateCollisionBox(x,y,w,h);
            
            
            }

            if(this.character.isCrouch){
                //console.log("is crouching");
                let w = this.character.width/(1*this.character.sizingFactor);
                let h = this.character.height-(30*this.character.sizingFactor);
                let x = this.character.x+(20*this.character.sizingFactor);
                let y = this.character.y+(30*this.character.sizingFactor);
                this.updateCollisionBox(x,y,w,h);
            }

            

            if(this.character.isJump){
                //console.log("isJumping");

                let w = this.character.width/(1.5 * this.character.sizingFactor);
                let h = this.character.height-(20*this.character.sizingFactor);
                let x = this.character.x+(25*this.character.sizingFactor);
                let y = this.character.y+(20*this.character.sizingFactor);
                this.updateCollisionBox(x,y,w,h);

                setTimeout(() => {
                w = this.character.width/(1.5 * this.character.sizingFactor);
                h = this.character.height-(25*this.character.sizingFactor);
                x = this.character.x+(25*this.character.sizingFactor);
                y = this.character.y+(25*this.character.sizingFactor);
                this.updateCollisionBox(x,y,w,h);
                },300)
            }
      }
}