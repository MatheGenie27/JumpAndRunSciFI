class World{
    game;
    level = level1;
    character;
    enemies=[];

constructor(game){
    this.game = game;
    console.log("Welt initialisiert.")
    this.run();
}



run(){
    setInterval(()=>{

        this.checkCollisions();
        //this.checkThrowObjects();
       







    },1000/5);
}

checkCollisions(){
    this.level.enemies.forEach( (enemy) => {
           //if(this.character.alternativeIsColliding(enemy)){
            //   console.log("Collision with Character: " ,this.character.energy, enemy);
           //    this.character.loseEnergy(5); 
           //    this.statusBar.setPercentage(this.character.energy);
           //}
       });
}

}