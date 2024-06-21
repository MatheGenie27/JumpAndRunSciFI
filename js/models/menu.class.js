class Menu{

    animationWidth= 400;
    animationHeight=300;
    animationX = 250; // X-Position für die Animation (Beispielwert)
    animationY = 150; // Y-Position für die Animation (Beispielwert)

    menuTitle = {
        name: 'MenuTitle',
        x:  360,
        y: 75,
        width: 100,
        height: 100,
        text: 'Main Menu',
        fillstyle: 'aqua',
        font: '36px Silkscreen'
    };

    buttons = [
        {
            name: 'Startbutton',
            x: 100,
            y: 250,
            width: 150,
            height: 40,
            text: 'Start',
            onclick: 'click',
            fillstyle: 'Gainsboro',
            font: '29px Silkscreen',
            hovered: false




        },

        {
            name: 'Creditsbutton',
            x: 100,
            y: 350,
            width: 150,
            height: 40,
            text: 'Credits',
            onclick: 'click',
            fillstyle: 'Gainsboro',
            font: '29px Silkscreen',
            hovered: false





        },

    ]


    backgroundBackImages = [
        'assets/img/menuImage/thunders-sky/frames/thunders-sky1.png',
        'assets/img/menuImage/thunders-sky/frames/thunders-sky2.png',
        'assets/img/menuImage/thunders-sky/frames/thunders-sky3.png',
        'assets/img/menuImage/thunders-sky/frames/thunders-sky4.png',
        'assets/img/menuImage/thunders-sky/frames/thunders-sky5.png',
        'assets/img/menuImage/thunders-sky/frames/thunders-sky6.png',
    ];

    currentBackgroundImage = 0;
    
    backgroundForeImage = 'assets/img/menuImage/city.png';

    constructor(){
        this.preloadAnimationImages();
        
        
    }

    preloadAnimationImages() {
        this.backgroundBackImages = this.backgroundBackImages.map(src => {
          const img = new Image();
          img.src = src;
          return img;
        });

        this.backgroundForeImage = new Image();
        this.backgroundForeImage.src = 'assets/img/menuImage/city.png';
        this.backgroundForeImage.onload = () => {
        
        
};

    }

    drawAnimation(ctx) {
      const animationSpeed = 0.14;
  
      const animate = () => {
          requestAnimationFrame(animate);
  
          // Berechnung des aktuellen Bildindex
          let currentImageIndex = Math.floor(this.currentBackgroundImage);
          const image = this.backgroundBackImages[currentImageIndex];
  
          // Zeichnen der Bilder auf den Canvas
          ctx.drawImage(image, this.animationX, this.animationY, this.animationWidth, this.animationHeight);
          ctx.drawImage(this.backgroundForeImage, this.animationX + 36.5, this.animationY + 75, this.animationWidth - 75, this.animationHeight - 75);
  
          // Aktualisieren des Bildindexes
          this.currentBackgroundImage += animationSpeed;
  
          // Zurücksetzen des Bildindexes, wenn das Ende der Bilderserie erreicht ist
          if (this.currentBackgroundImage >= this.backgroundBackImages.length) {
              this.currentBackgroundImage = 0; // Zurücksetzen auf den Anfang
          }
      };
  
      // Starten der Animation
      requestAnimationFrame(animate);
  }
    
     
    drawAnimationBorder(ctx){
            console.log("AnimationBorder");
            ctx.strokeStyle = 'white';
            
            ctx.strokeRect(this.animationX-2, this.animationY-2,this.animationWidth+5, this.animationHeight+5);
   }




       


    drawTitle(ctx){
        ctx.fillStyle = this.menuTitle.fillstyle;
        ctx.font = this.menuTitle.font;
        ctx.fillText(this.menuTitle.text, this.menuTitle.x, this.menuTitle.y); 
    }

    // Methode zum Zeichnen der Buttons
  drawButtons(ctx) {
    for (const button of this.buttons) {
      ctx.fillStyle = button.hovered ? 'aqua' :button.fillstyle;
      ctx.font = button.font;
      ctx.fillText(button.text, button.x, button.y);

      // Optional: Button-Umriss zeichnen
      ctx.strokeStyle = 'white';
      ctx.strokeRect(button.x-(button.width/2), button.y - button.height/1.4, button.width, button.height);
    }
  }



}