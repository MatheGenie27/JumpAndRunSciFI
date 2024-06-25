class DrawableObject {
    x = 150;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = [];
    currentImage = 0;
  
    loadImage(path) {
      this.img = new Image();
      this.img.src = path;
    }
  
    loadImages(arr) {
      arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
      });
    }
  
    draw(ctx) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  
    showCollisionBox(ctx){
      if(this instanceof Character || this instanceof Chicken || this instanceof Endboss ){
      ctx.beginPath();
      ctx.lineWidth = '1.5';
      ctx.strokeStyle = 'blue';
      ctx.rect(this.x,this.y,this.width,this.height);
      ctx.stroke();
      }
  }
  
  
  
  
    playAnimation(IMAGES) {
      let i = this.currentImage % IMAGES.length;
      let path = IMAGES[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }
  }