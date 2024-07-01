class CameraHandler{
    character;
    camera;
    leftBorder;
    rightBorder;
    leftSpacing;


    constructor(character){
        this.character = character;
        this.camera = this.character.world;
        this.leftBorder=0;
        this.rightBorder=720;
        this.leftSpacing = 0.25*this.character.width;
        this.rightSpacing = 1.6*this.character.width;
    }


    cameraHandling(){
        if(this.character.x < this.leftBorder+this.leftSpacing){
            this.camera.camera_x = -this.character.x+this.leftSpacing;
            this.leftBorder = this.character.x -this.leftSpacing;
            this.rightBorder = this.leftBorder+720;
        } 
        
        if(this.character.x > this.rightBorder-this.rightSpacing){
            
            this.camera.camera_x = -this.character.x-this.rightSpacing +720;
            this.rightBorder = this.character.x+this.rightSpacing;
            this.leftBorder = this.rightBorder-720;
        }

        


        //this.camera.camera_x = -this.character.x + 100;
     }   
}