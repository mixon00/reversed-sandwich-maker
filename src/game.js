var Game = {
    dt: 0,
    step: 1/60,
    timestamp: function(){
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    },
    run: function(){
        this.last = this.timestamp();
        this.loop = requestAnimationFrame(this.frame.bind(this));
    },
    frame: function() {
        this.now = this.timestamp();
        this.dt = this.dt + Math.min(1, (this.now - this.last) / 1000);
        while(this.dt > this.step) {
            this.dt = this.dt - this.step;
            this.update(this.step);
        }
        this.render(this.dt);
        this.last = this.now;
        this.loop = requestAnimationFrame(this.frame.bind(this));
    },
    update: function(dt){
        State.current.update(dt);
    },
    render: function(dt){
        this.clear();
        State.current.render(dt);
    },
    clear: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
