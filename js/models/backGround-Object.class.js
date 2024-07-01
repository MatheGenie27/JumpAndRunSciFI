class BackgroundObject extends MovableObject{

    canvasWidth = 720;
    canvasHeight= 480;
    sizingFactor;



    constructor(imagePath, x, ground_y, backgroundSizingFactor, width, height ){
        super().loadImage(imagePath);
        this.sizingFactor = backgroundSizingFactor;
        this.width = width * this.sizingFactor;
        this.height = height * this.sizingFactor;

        this.x = x ;
        this.y = ground_y - this.height;
        
        //console.log("background width:" +this.width);
        //console.log("background height:" +this.height);
    }

}