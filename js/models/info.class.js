class Info extends MenuContent {




    menuTitle = {
        name: 'MenuTitle',
        x:  360,
        y: 50,
        width: 100,
        height: 100,
        text: 'Info',
        fillstyle: 'aqua',
        font: '36px Silkscreen'
    };


    buttons = [{
        name: 'ReturnButton',
                x: 360,
                y: 440,
                width:375,
                height: 40,
                text: 'Return to MainMenu',
                onclick: () => { this.game.switchState(new MenuState(this.game)); },
                fillstyle: 'Gainsboro',
                font: '29px Silkscreen',
                hovered: false
    }]

text = `
Dieses Spiel ist in Modul 12 "El pollo loco" an der 
DeveloperAkademie GmbH entstanden. Mit ihm sollen 
Kenntnisse in Objektorientierter Programmierung in 
JavaScript nachgewiesen werden. 

Gefordert war ein Platformer, der im Desktop als auch
mobil spielbar ist.


`; 





constructor(game){
    super(game);
    this.lineHeight = 20; // Zeilenhöhe des Textes

}






drawButtons(ctx) {
    for (const button of this.buttons) {
      ctx.textAlign='center';  
      ctx.fillStyle = button.hovered ? 'aqua' :button.fillstyle;
      ctx.font = button.font;
      ctx.fillText(button.text, button.x, button.y);
  
      // Optional: Button-Umriss zeichnen
      ctx.strokeStyle = 'white';
      ctx.strokeRect(button.x-(button.width/2), button.y - button.height/1.4, button.width, button.height);
    }
  }

drawText(ctx){
    const lines = this.text.split('\n');
    ctx.font = '16px Silkscreen';
    ctx.textAlign = 'left';
    ctx.fillStyle = 'white';
        for (let i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], 50, 150 + i * this.lineHeight);
        }
    }




drawTitle(ctx){
    ctx.textAlign='center';
    ctx.fillStyle = this.menuTitle.fillstyle;
    ctx.font = this.menuTitle.font;
    ctx.fillText(this.menuTitle.text, this.menuTitle.x, this.menuTitle.y); 
}

}