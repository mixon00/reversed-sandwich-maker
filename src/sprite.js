var Sprite = Class.extend({
    x: 0,
    y: 0,
    width: 16,
    height: 16,
    size: 1,
    data: [],
    palette: {},
    init: function(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    },
    setPos: function(x,y) {
        this.x = x;
        this.y = y;
    },
    getPos: function() {
        return [this.x, this.y];
    },
    setScale: function(scale){
        this.size = scale;
    },
    update: function(dt) {},
    render: function(dt) {
        var currX = this.x-(this.width*this.size)/2;
        var currY = this.y-(this.height*this.size)/2;
        var addX = 0;
        for (var y = 0; y < this.data.length; y++) {
            var row = this.data[y];
            for (var x = 0; x < row.length; x++) {
                if (row[x]) {
                    ctx.fillStyle = this.palette[row[x]];
                    ctx.fillRect(currX + x * this.size, currY, this.size, this.size);
                }
            }
            addX = Math.max(addX, row.length * this.size);
            currY += this.size;
        }
    },
    center: function() {
        return [(this.width*this.size)/2,(this.height*this.size)/2];
    },
    centerX: function() {
        return (this.width*this.size)/2;
    },
    centerY: function() {
        return (this.height*this.size)/2;
    },
    overlaps: function(x,y){
        if(x > this.x-(this.width*this.size)/2 && this.x+(this.width*this.size)/2 > x && y > this.y-(this.height*this.size)/2 && this.y+(this.height*this.size)/2 > y){
            return true;
        } else {
            return false;
        }
    }
});
