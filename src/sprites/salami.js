var Salami = Sprite.extend({
    palette: {
        1: "#872d22",
        2: "#ac3523",
        3: "#cca097"
    },
    data: [
        [,,,,,1,1,1,1,1,1],
        [,,,1,1,1,1,1,1,1,1,1,1],
        [,,1,1,1,2,2,2,2,2,2,1,1,1],
        [,1,1,1,2,2,2,3,2,2,2,2,1,1,1],
        [,1,1,2,2,3,2,2,2,3,2,2,2,1,1],
        [1,1,2,2,2,2,2,3,3,2,3,2,2,2,1,1],
        [1,1,2,3,2,3,2,2,2,2,2,3,2,2,1,1],
        [1,1,2,2,3,2,2,2,2,2,2,2,2,2,1,1],
        [1,1,2,2,2,2,2,2,3,2,2,2,2,2,1,1],
        [1,1,2,3,2,2,2,2,2,2,2,3,2,2,1,1],
        [1,1,2,2,2,2,3,2,2,2,2,2,2,2,1,1],
        [,1,1,2,2,3,2,2,3,2,2,3,2,1,1],
        [,1,1,1,2,2,2,3,2,2,2,2,1,1,1],
        [,,1,1,1,2,2,2,2,2,2,1,1,1],
        [,,,1,1,1,1,1,1,1,1,1,1],
        [,,,,,1,1,1,1,1,1]
    ],
    init: function(x,y) {
        this.type = "salami";
        this._super(x,y,4);
    }
});
