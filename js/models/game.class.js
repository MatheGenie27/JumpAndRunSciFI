class Game {
    constructor() {
        this.canvas = document.getElementById('myCanvas');
        this.context = this.canvas.getContext('2d');
        this.currentState = null;

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
