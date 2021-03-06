var Font = Class.extend({
    x: 0,
    y: 0,
    text: "",
    needed: [],
    size: 24,
    color: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    },
    letters: {
        'A': [
            [, 1],
            [1, , 1],
            [1, , 1],
            [1, 1, 1],
            [1, , 1]
        ],
        'B': [
            [1, 1],
            [1, , 1],
            [1, 1, 1],
            [1, , 1],
            [1, 1]
        ],
        'C': [
            [1, 1, 1],
            [1],
            [1],
            [1],
            [1, 1, 1]
        ],
        'D': [
            [1, 1],
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, 1]
        ],
        'E': [
            [1, 1, 1],
            [1],
            [1, 1, 1],
            [1],
            [1, 1, 1]
        ],
        'F': [
            [1, 1, 1],
            [1],
            [1, 1],
            [1],
            [1]
        ],
        'G': [
            [, 1, 1],
            [1],
            [1, , 1, 1],
            [1, , , 1],
            [, 1, 1]
        ],
        'H': [
            [1, , 1],
            [1, , 1],
            [1, 1, 1],
            [1, , 1],
            [1, , 1]
        ],
        'I': [
            [1, 1, 1],
            [, 1],
            [, 1],
            [, 1],
            [1, 1, 1]
        ],
        'J': [
            [1, 1, 1],
            [, , 1],
            [, , 1],
            [1, , 1],
            [1, 1, 1]
        ],
        'K': [
            [1, , , 1],
            [1, , 1],
            [1, 1],
            [1, , 1],
            [1, , , 1]
        ],
        'L': [
            [1],
            [1],
            [1],
            [1],
            [1, 1, 1]
        ],
        'M': [
            [1, 1, 1, 1, 1],
            [1, , 1, , 1],
            [1, , 1, , 1],
            [1, , , , 1],
            [1, , , , 1]
        ],
        'N': [
            [1, , , 1],
            [1, 1, , 1],
            [1, , 1, 1],
            [1, , , 1],
            [1, , , 1]
        ],
        'O': [
            [1, 1, 1],
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, 1, 1]
        ],
        'P': [
            [1, 1, 1],
            [1, , 1],
            [1, 1, 1],
            [1],
            [1]
        ],
        'Q': [
            [0, 1, 1],
            [1, , , 1],
            [1, , , 1],
            [1, , 1, 1],
            [1, 1, 1, 1]
        ],
        'R': [
            [1, 1],
            [1, , 1],
            [1, , 1],
            [1, 1],
            [1, , 1]
        ],
        'S': [
            [1, 1, 1],
            [1],
            [1, 1, 1],
            [, , 1],
            [1, 1, 1]
        ],
        'T': [
            [1, 1, 1],
            [, 1],
            [, 1],
            [, 1],
            [, 1]
        ],
        'U': [
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, 1, 1]
        ],
        'V': [
            [1, , , , 1],
            [1, , , , 1],
            [, 1, , 1],
            [, 1, , 1],
            [, , 1]
        ],
        'W': [
            [1, , , , 1],
            [1, , , , 1],
            [1, , 1, , 1],
            [1, , 1, , 1],
            [1, 1, 1, 1, 1]
        ],
        'X': [
            [1, , , , 1],
            [, 1, , 1],
            [, , 1],
            [, 1, , 1],
            [1, , , , 1]
        ],
        'Y': [
            [1, , 1],
            [1, , 1],
            [, 1],
            [, 1],
            [, 1]
        ],
        'Z': [
            [1, 1, 1, 1, 1],
            [, , , 1],
            [, , 1],
            [, 1],
            [1, 1, 1, 1, 1]
        ],
        '0': [
            [1, 1, 1],
            [1, , 1],
            [1, , 1],
            [1, , 1],
            [1, 1, 1]
        ],
        '1': [
            [, , 1],
            [, 1, 1],
            [1, , 1],
            [, , 1],
            [, , 1]
        ],
        '2': [
            [1, 1, 1],
            [, , 1],
            [1, 1, 1],
            [1],
            [1, 1, 1]
        ],
        '3': [
            [1, 1, 1],
            [, , 1],
            [1, 1, 1],
            [, , 1],
            [1, 1, 1]
        ],
        '4': [
            [1, , 1],
            [1, , 1],
            [1, 1, 1],
            [, , 1],
            [, , 1]
        ],
        '5': [
            [1, 1, 1],
            [1],
            [1, 1, 1],
            [, , 1],
            [1, 1, 1]
        ],
        '6': [
            [1, 1, 1],
            [1],
            [1, 1, 1],
            [1, , 1],
            [1, 1, 1]
        ],
        '7': [
            [1, 1, 1],
            [, , 1],
            [, 1],
            [1],
            [1]
        ],
        '8': [
            [1, 1, 1],
            [1, , 1],
            [1, 1, 1],
            [1, , 1],
            [1, 1, 1]
        ],
        '9': [
            [1, 1, 1],
            [1, , 1],
            [1, 1, 1],
            [, , 1],
            [1, 1, 1]
        ],
        '0': [
            [1, 1, 1],
            [1, , 1],
            [1, , 1],
            [1 , , 1],
            [1, 1, 1]
        ],
        ':': [
            [],
            [, 1],
            [],
            [, 1]
        ],
        '+': [
            [],
            [, 1],
            [1, 1, 1],
            [, 1]
        ],
        '#': [
            [, 1, 1, , 1, 1],
            [1, , , 1, , , 1],
            [1, , , , , , 1],
            [, 1, , , , 1],
            [, , 1, , 1],
            [, , , 1]
        ],
        '@': [
            [, 1, 1, , 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [, 1, 1, 1, 1, 1],
            [, , 1, 1, 1],
            [, , , 1]
        ],
        '.': [
            [],
            [],
            [],
            [],
            [1]
        ],
        '/': [
            [,,,,1],
            [,,,1],
            [,,1],
            [,1],
            [1]
        ],
        '-': [
            [],
            [],
            [1,1,1]
        ],
        ' ': [
            [, ,],
            [, ,],
            [, ,],
            [, ,],
            [, ,]
        ]
    },
    init: function(x,y, text, size) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.size = size;

        this.setText(this.text);
    },
    setText: function(text) {
        this.text = text;
        this.needed = [];
        if(text !== ""){
            this.text = this.text.toUpperCase(); // because I only did uppercase letters
            for (var i = 0; i < this.text.length; i++) {
                var letter = this.letters[this.text.charAt(i)];
                if (letter) { // because there's letters I didn't do
                    this.needed.push(letter);
                }
            }
        }
        return this;
    },
    setColor: function(r,g,b,a) {
        this.color.r = r;
        this.color.g = g;
        this.color.b = b;
        this.color.a = a;
    },
    getColor: function() {
        return this.color;
    },
    setPos: function(x,y) {
        this.x = x;
        this.y = y;
    },
    getPos: function() {
        return [this.x, this.y];
    },
    render: function() {
        ctx.fillStyle = 'rgba('+this.color.r+','+this.color.g+','+this.color.b+','+this.color.a+')';
        var currX = this.x;
        for (i = 0; i < this.needed.length; i++) {
            letter = this.needed[i];
            var currY = this.y;
            var addX = 0;
            for (var y = 0; y < letter.length; y++) {
                var row = letter[y];
                for (var x = 0; x < row.length; x++) {
                    if (row[x]) {
                        ctx.fillRect(currX + x * this.size, currY, this.size, this.size);
                    }
                }
                addX = Math.max(addX, row.length * this.size);
                currY += this.size;
            }
            currX += this.size + addX;
        }
    }
});
