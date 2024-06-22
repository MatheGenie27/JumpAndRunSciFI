class Credits {
  menuTitle = {
    name: "MenuTitle",
    x: 360,
    y: 50,
    width: 100,
    height: 100,
    text: "Main Menu",
    fillstyle: "aqua",
    font: "36px Silkscreen",
  };

  credits = [
    {
      name: "Developer",
      x: 360,
      y: 150,
      width: 100,
      height: 100,
      text: "Developer: Björn Breßler",
      fillstyle: "Gainsboro",
      font: "29px Silkscreen",
    },
    {
      name: "Artwork",
      x: 360,
      y: 200,
      width: 100,
      height: 100,
      text: 'Artwork: Ansimuz & ',
      fillstyle: "Gainsboro",
      font: "29px Silkscreen",
    },

    {
        name: "Artwork2",
        x: 360,
        y: 230,
        width: 100,
        height: 100,
        text: 'https://craftpix.net/',
        fillstyle: "Gainsboro",
        font: "29px Silkscreen",
    },


    {
      name: "Music",
      x: 360,
      y: 270,
      width: 100,
      height: 100,
      text: "Music: Ansimuz",
      fillstyle: "Gainsboro",
      font: "29px Silkscreen",
    },
    {
      name: "Sound",
      x: 360,
      y: 320,
      width: 100,
      height: 100,
      text: "Sound: t.b.a",
      fillstyle: "Gainsboro",
      font: "29px Silkscreen",
    },
  ];


button = {
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
}

constructor(game){
    this.game=game;
}


drawTitle(ctx){
    ctx.fillStyle = this.menuTitle.fillstyle;
    ctx.font = this.menuTitle.font;
    ctx.fillText(this.menuTitle.text, this.menuTitle.x, this.menuTitle.y); 
}

drawCredits(ctx){
    for (const credit of this.credits) {
        ctx.fillStyle = credit.fillstyle;
        ctx.font = credit.font;
        ctx.fillText(credit.text, credit.x, credit.y);
}
}


// Methode zum Zeichnen der Buttons
drawButton(ctx) {
    const button = this.button;
  ctx.fillStyle =button.hovered ? 'aqua' :button.fillstyle;
  ctx.font = button.font;
  ctx.fillText(button.text, button.x, button.y);

  // Optional: Button-Umriss zeichnen
  ctx.strokeStyle = 'white';
  ctx.strokeRect(button.x-(button.width/2), button.y - button.height/1.4, button.width, button.height);

}

}