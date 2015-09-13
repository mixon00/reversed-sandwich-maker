var Menu = {
    init: function() {
        this.table = new Table(canvas.width/2, canvas.height/2);

        this.title1 = new Font(canvas.width/2-132, -40, "reversed", 8);
        this.title1.color = {r:255,g:65,b:35,a:1};
        this.title2 = new Font(canvas.width/2-300, 480, "sandwich maker", 10);
        this.title2.color = {r:255,g:65,b:35,a:1};

        this.title1bg = new Font(canvas.width/2-128, -36, "reversed", 8);
        this.title1bg.color = {r:0,g:0,b:0,a:0.5};
        this.title2bg = new Font(canvas.width/2-296, 486, "sandwich maker", 10);
        this.title2bg.color = {r:0,g:0,b:0,a:0.5};

        this.start = new Font(canvas.width/2-110, canvas.height-50, "click to start", 4);
        this.start.color = {r:255,g:65,b:35,a:0};
        this.startBg = new Font(canvas.width/2-108, canvas.height-48, "click to start", 4);
        this.startBg.color = {r:0,g:0,b:0,a:0};

        this.items = [];

        this.timer = 1.5;

        for(var m = 0; m < 20; m++) {
            this.createItem();
        }

        canvas.onmouseup = this.click;
    },
    update: function(dt) {

        (this.title1.y < 70) ? this.title1.y += 100*dt : this.title1.y = 70;
        (this.title2.y > 140) ? this.title2.y -= 300*dt : this.title2.y = 140;

        (this.title1bg.y < 74) ? this.title1bg.y += 100*dt : this.title1bg.y = 74;
        (this.title2bg.y > 144) ? this.title2bg.y -= 300*dt : this.title2bg.y = 144;

        for(var i in this.items) {
            if(this.items[i].axis) {
                this.items[i].direction ? this.items[i].x += this.items[i].speed*dt : this.items[i].x -=  this.items[i].speed*dt;
                if(this.items[i].x < -61 || this.items[i].x > 861) {
                    this.createItem();
                    delete this.items[i];
                }
            } else {
                this.items[i].direction ? this.items[i].y -= this.items[i].speed*dt : this.items[i].y += this.items[i].speed*dt;
                if(this.items[i].y < -61 || this.items[i].y > 541) {
                    this.createItem();
                    delete this.items[i];
                }
            }
        }

        if(this.timer > 0) {
            this.timer -= dt;
        }

        if(this.timer <= 0) {
            if(this.start.color.a < 1){
                this.start.color.a += 1*dt;
            }
            if(this.startBg.color.a < 0.5) {
                this.startBg.color.a += 1*dt;
            }
        }
    },
    render: function(dt) {
        this.table.render(dt);

        for(var i in this.items) {
            this.items[i].render(dt);
        }

        this.title1bg.render(dt);
        this.title2bg.render(dt);

        this.title1.render(dt);
        this.title2.render(dt);

        this.startBg.render(dt);
        this.start.render(dt);
    },
    createItem: function() {
        var axis = (Math.random() < 0.5) ? 0 : 1;
        var direction = (Math.random() < 0.5) ? 0 : 1;
        var rand = Math.floor(Math.random() * 6);
        var randomID = Math.random().toString();

        if(axis) {
            var x = direction ? -60 : 860;
            var y = Math.floor(Math.random() * 500);
        } else {
            var y = direction < 0.5 ? -60 : 540;
            var x = Math.floor(Math.random() * 800);
        }

        switch (rand) {
            case 0:
                this.items[randomID] = new Cheese(x, y);
                break;
            case 1:
                this.items[randomID] = new Lettuce(x, y);
                break;
            case 2:
                this.items[randomID] = new Salami(x, y);
                break;
            case 3:
                this.items[randomID] = new Tomato(x, y);
                break;
            case 4:
                this.items[randomID] = new Egg(x, y);
                break;
            case 5:
                this.items[randomID] = new Plate(x, y);
                break;
        }

        this.items[randomID].speed = Math.floor(Math.random() * 301)+ 100;
        this.items[randomID].axis = axis;
        this.items[randomID].direction = direction;
    },
    click: function() {
        State.set(Play);
    },
    destroy: function() {
        canvas.onmouseup = "";
    }
};
