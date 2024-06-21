class Menu{

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
        // Hier zeichnest du das Vordergrundbild oder startest die Animation
        this.drawAnimation(ctx);
};

    }

    drawAnimation(ctx) {
        const animationWidth= 400;
        const animationHeight=300;
        const animationX = 250; // X-Position für die Animation (Beispielwert)
        const animationY = 150; // Y-Position für die Animation (Beispielwert)
        const animationSpeed = 0.005;
        
        const targetFPS = 10; // Ziel-FPS
        const frameTime = 1000 / targetFPS;

        let lastTimestamp = performance.now();
        

        const animate = (timestamp) => {
            requestAnimationFrame(animate);
        
            const deltaTime = timestamp - lastTimestamp;
        
            if (deltaTime < frameTime) {
              return; // Überspringen, wenn nicht genug Zeit vergangen ist
            }
        
            lastTimestamp = timestamp;


            

        
            let currentImageIndex = Math.floor(this.currentBackgroundImage);
            const image = this.backgroundBackImages[currentImageIndex];
        
            ctx.drawImage(image, animationX, animationY,animationWidth, animationHeight);
            ctx.drawImage(this.backgroundForeImage, animationX+36.5, animationY+75, animationWidth-75, animationHeight-75);

            ctx.strokeStyle = 'white';
            ctx.strokeRect(animationX, animationY,animationWidth, animationHeight);
        
            this.currentBackgroundImage += animationSpeed;
        
            if (this.currentBackgroundImage >= this.backgroundBackImages.length) {
              this.currentBackgroundImage = 0; // Zurücksetzen auf den Anfang
            }
          };
        
          
          
          
          animate(lastTimestamp); // Starte die Animation
        

         

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