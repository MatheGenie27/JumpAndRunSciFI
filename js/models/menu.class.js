class Menu extends MenuContent{

    animationWidth= 450;
    animationHeight=325;
    animationX = 135; // X-Position für die Animation (Beispielwert)
    animationY = 75; // Y-Position für die Animation (Beispielwert)
    showAnimation = true;

    menuTitle = {
        name: 'MenuTitle',
        x:  360,
        y: 50,
        width: 100,
        height: 100,
        text: 'Main Menu',
        fillstyle: 'aqua',
        font: '36px Silkscreen'
    };

    buttons = [
        {
            name: 'Startbutton',
            x: 210,
            y: 440,
            width: 150,
            height: 40,
            text: 'Start',
            onclick: () => { this.game.switchState(new PlayState(this.game)); },
            fillstyle: 'Gainsboro',
            font: '29px Silkscreen',
            hovered: false




        },

    {
        name: 'Infobutton',
        x:360,
        y: 440,
        width: 125,
        height: 40,
        text: 'Info',
        onclick: () => {this.game.switchState(new InfoState(this.game));},
        fillstyle: 'Gainsboro',
        font: '29px Silkscreen',
        hovered: false
    },

        {
            name: 'Creditsbutton',
            x: 510,
            y: 440,
            width: 150,
            height: 40,
            text: 'Credits',
            onclick: () => { this.game.switchState(new CreditsState(this.game)); },
            fillstyle: 'Gainsboro',
            font: '29px Silkscreen',
            hovered: false





        }

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

    constructor(game){
        super(game);
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
        if(!this.showAnimation){
            return;
        }
          requestAnimationFrame(animate);         
          let currentImageIndex = Math.floor(this.currentBackgroundImage);
          const image = this.backgroundBackImages[currentImageIndex];          
          ctx.drawImage(image, this.animationX, this.animationY, this.animationWidth, this.animationHeight);
          ctx.drawImage(this.backgroundForeImage, this.animationX + 36.5, this.animationY + 75, this.animationWidth - 75, this.animationHeight - 75);         
          this.currentBackgroundImage += animationSpeed;         
          if (this.currentBackgroundImage >= this.backgroundBackImages.length) {
              this.currentBackgroundImage = 0; 
          }
      };
      requestAnimationFrame(animate);
  } 

    stopAnimation(){
        this.showAnimation=false;
    }
    
     
    drawAnimationBorder(ctx){
            
            ctx.strokeStyle = 'white';
            
            ctx.strokeRect(this.animationX-2, this.animationY-2,this.animationWidth+5, this.animationHeight+5);
   }


   drawText(){

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