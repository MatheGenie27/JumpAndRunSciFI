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
                let w = this.character.width/2.5;
                let h = this.character.height-15;
                let x = this.character.x+45;
                let y = this.character.y+15;
                this.updateCollisionBox(x,y,w,h);
            }

            if (this.character.isRunning){
                let w = this.character.width;
                let h = this.character.height;
                let x = this.character.x;
                let y = this.character.y;
                this.updateCollisionBox(x,y,w,h);
            }
      }
}