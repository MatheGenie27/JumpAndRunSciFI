let keyboard = new Keyboard();


setInterval(()=>
    {
        if(keyboard.UP==true){
            console.log("UP!");
        }
        if(keyboard.DOWN==true){
            console.log("DOWN!");
        }
        if(keyboard.LEFT==true){
            console.log("LEFT!");
        }
        if(keyboard.RIGHT==true){
            console.log("RIGHT!");
        }
        if(keyboard.W==true){
            console.log("W  !");
        }
        if(keyboard.A==true){
            console.log("A!");
        }
        if(keyboard.S==true){
            console.log("S  !");
        }
        if(keyboard.D==true){
            console.log("D  !");
        }
        if(keyboard.E==true){
            console.log("E!");
        }
        if(keyboard.X==true){
            console.log("X  !");
        }
        if(keyboard.L==true){
            console.log("L  !");
        }
        if(keyboard.F==true){
            console.log("F!");
        }

        if(keyboard.P == true){
            console.log("P!");
        }





    },1000/60);