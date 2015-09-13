var Assets = {
    list: [],
    count: 0,
    loaded: 0,
    loadImg: function(file,name) {

        var customName = (name === undefined) ? file : name;

        var tmpImg = new Image();

        tmpImg.src = './assets/img/'+file;
        this.count++;

        tmpImg.onload = function() {
            this.list[customName] = tmpImg;
            this.loaded++;
        }.bind(this);

        return this;
    },
    get: function(name) {
        return this.list[name];
    },
    set: function(name, data) {
        this.list[name] = data;
        return this;
    }
}
