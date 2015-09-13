var State = {
    current: undefined,
    set: function(name) {
        if(this.current !== undefined){
            this.current.destroy();
        }
        this.current = name;
        this.current.init();
    }
};
