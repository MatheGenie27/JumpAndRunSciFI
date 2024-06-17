class Game {
    constructor() {
        this.canvas = document.getElementById('myCanvas');
        this.context = this.canvas.getContext('2d');
        this.currentState = null;

        this.init();
    }

    init() {
        this.switchState(new MenuState(this));
        this.loop();
    }

    switchState(state) {
        if (this.currentState) {
            this.currentState.exit();
        }
        this.currentState = state;
        if (this.currentState) {
            this.currentState.enter();
        }
    }

    loop() {
        requestAnimationFrame(() => this.loop());
        if (this.currentState) {
            this.currentState.update();
            this.currentState.draw();
        }
    }
}
