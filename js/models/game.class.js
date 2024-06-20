class Game {
    constructor() {
        this.canvas = document.getElementById('myCanvas');
        this.context = this.canvas.getContext('2d');
        this.currentState = null;

        this.backgroundMusic = null;
        this.fadeOutDuration = 3000;
        this.isFadingOut = false;

        this.handleClick = this.handleClick.bind(this);
        this.handleMouse = this.handleMouseMove.bind(this);

        this.init();
    }

    init() {
        this.switchState(new MenuState(this));
        this.loop();
    }

    switchState(state) {
        if (this.currentState) {
            this.canvas.removeEventListener('click', this.handleClick);
            this.currentState.exit();
            this.currentState= null;
        }
        this.currentState = state;
        if (this.currentState) {
            this.currentState.enter();
            this.canvas.addEventListener('click', this.handleClick);
        }
    }

    playBackgroundMusic(src){
        if (this.backgroundMusic) {
            this.backgroundMusic.pause();
        }
        this.backgroundMusic = new Audio(src);
        this.backgroundMusic.volume = 0.1;
        this.backgroundMusic.loop = true;




        this.backgroundMusic.addEventListener('timeupdate', () => {
            const currentTime = this.backgroundMusic.currentTime;
            const duration = this.backgroundMusic.duration;
            // Überprüfe, ob die Musik innerhalb der letzten Sekunde des Loops ist
            if (!this.isFadingOut && duration - currentTime <= this.fadeOutDuration / 1000) {
                this.isFadingOut=true;
                this.fadeOutBackgroundMusic();
            }
        });
        
        this.backgroundMusic.play();
        
    }

    fadeOutBackgroundMusic() {
        console.log("Music FADEOUT");
        if (!this.backgroundMusic) return;

        const initialVolume = this.backgroundMusic.volume;
        const fadeOutInterval = 200; // Intervall für die Lautstärkeänderung (in Millisekunden)
        const steps = Math.ceil(this.fadeOutDuration / fadeOutInterval);
        const volumeStep = initialVolume / steps;
        let volume = this.backgroundMusic.volume;

        const fadeOutTimer = setInterval(() => {
            
            volume -= volumeStep; 

            // Überprüfe, ob die Lautstärke auf 0 gesunken ist
            if (volume <= 0) {
                clearInterval(fadeOutTimer);
                this.backgroundMusic.pause();
                this.backgroundMusic.currentTime = 0;
                this.backgroundMusic.volume = initialVolume;
                this.isFadingOut = false;
                this.backgroundMusic.play();
                
            } else {
                this.backgroundMusic.volume = volume;
            }
        }, fadeOutInterval);
    }

    stopBackgroundMusic(){
        if (this.backgroundMusic) {
            this.backgroundMusic.pause();
        }
    }


    loop() {
        requestAnimationFrame(() => this.loop());
        if (this.currentState) {
            this.currentState.update();
            this.currentState.draw();
        }
    }

    handleClick(event){
        if (this.currentState && this.currentState.handleClick) {
            const rect = this.canvas.getBoundingClientRect();
            const scaleX = this.canvas.width / rect.width;
            const scaleY = this.canvas.height / rect.height;

            const x = (event.clientX - rect.left) * scaleX;
            const y = (event.clientY - rect.top) * scaleY;

            this.currentState.handleClick(x, y);
        }
    }

    handleMouseMove(event) {
        if (this.currentState && this.currentState.handleMouseMove) {
            const rect = this.canvas.getBoundingClientRect();
            const scaleX = this.canvas.width / rect.width;
            const scaleY = this.canvas.height / rect.height;

            const x = (event.clientX - rect.left) * scaleX;
            const y = (event.clientY - rect.top) * scaleY;

            this.currentState.handleMouseMove(x, y);
        }
    }

}
