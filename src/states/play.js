var Play = {
    init: function(){
        this.mouse = false;
        this.plate = [];
        this.sceneItems = [];
        this.currentPlate = 0;
        this.dragItem = false;
        this.score = 0;
        this.best = parseInt(localStorage.getItem("best-score"),10) || 0;
        this.lives = 3;
        this.multiplier = 0.25;
        this.ingredients = 3;
        this.scoreTxt = new Font(canvas.width/2-72, 40, "score: 0", 4);
        this.scoreTxt.color = {r:255,g:65,b:35,a:1};
        this.scoreTxtBg = new Font(canvas.width/2-70, 42, "score: 0", 4);
        this.scoreTxtBg.color = {r:0,g:0,b:0,a:0.5};
        this.animatedTxt = [];
        this.endgame = false;
        this.showgameover = false;
        this.timer = 30;
        this.timerTxt = new Font(canvas.width/2-72, 70, "time : " + this.timer.toString(), 4);
        this.timerTxt.color = {r:255,g:65,b:35,a:1};
        this.timerTxtBg = new Font(canvas.width/2-70, 72, "time : " + this.timer.toString(), 4);
        this.timerTxtBg.color = {r:0,g:0,b:0,a:0.5};

        this.gameoverTxt = [];
        var white = {r:255,g:255,b:255,a:1};

        this.gameoverTxt[0] = new Font(canvas.width/2-200, 100, "game over", 10);
        this.gameoverTxt[0].color = white;

        this.gameoverTxt[1] = new Font(canvas.width/2-94, canvas.height-110, "click to restart", 3);
        this.gameoverTxt[1].color = white;

        this.gameoverTxt[2] = new Font(canvas.width/2-200, 230, "score: "+this.score.toString(), 6);
        this.gameoverTxt[2].color = white;

        this.gameoverTxt[3] = new Font(canvas.width/2-200, 270, "best: "+this.best.toString(), 4);
        this.gameoverTxt[3].color = white;

        // # - empty heart
        // @ - full heart
        this.livesTxt = new Font(canvas.width/2-72, canvas.height-55, "@ @ @", 5);
        this.livesTxt.color = {r:200,g:0,b:0,a:1};

        this.livesTxtBg = new Font(canvas.width/2-70, canvas.height-53, "@ @ @", 5);
        this.livesTxtBg.color = {r:0,g:0,b:0,a:0.5};

        //create bg
        this.table = new Table(canvas.width/2, canvas.height/2);

        //set elements
        //tomato plate
        this.sceneItems[0] = new Plate(canvas.width/2-200, canvas.height/2-130);
        //lettuce plate
        this.sceneItems[1] = new Plate(canvas.width/2-250, canvas.height/2);
        //cheese plate
        this.sceneItems[2] = new Plate(canvas.width/2-200, canvas.height/2+130);
        //bread plate
        this.sceneItems[3] = new Plate(canvas.width/2+200, canvas.height/2-130);
        //salami plate
        this.sceneItems[4] = new Plate(canvas.width/2+250, canvas.height/2);
        //egg plate
        this.sceneItems[5] = new Plate(canvas.width/2+200, canvas.height/2+130);
        //tomatoes
        this.sceneItems[6] = new Tomato(canvas.width/2-190, canvas.height/2-130);
        this.sceneItems[7] = new Tomato(canvas.width/2-210, canvas.height/2-145);
        this.sceneItems[8] = new Tomato(canvas.width/2-215, canvas.height/2-120);
        //lettuce
        this.sceneItems[9] = new Lettuce(canvas.width/2-250, canvas.height/2);
        //cheeses
        this.sceneItems[10] = new Cheese(canvas.width/2-210, canvas.height/2+120);
        this.sceneItems[11] = new Cheese(canvas.width/2-190, canvas.height/2+140);
        //bread slices
        this.sceneItems[12] = new Bread(canvas.width/2+195, canvas.height/2-130);
        this.sceneItems[13] = new Bread(canvas.width/2+205, canvas.height/2-120);
        //salami
        this.sceneItems[14] = new Salami(canvas.width/2+230, canvas.height/2);
        this.sceneItems[15] = new Salami(canvas.width/2+270, canvas.height/2-10);
        //egg
        this.sceneItems[16] = new Egg(canvas.width/2+200, canvas.height/2+130);
        //empty plate
        this.sceneItems[17] = new Plate(canvas.width/2, canvas.height/2);

        //render random sandwich
        this.createPlate();

        canvas.addEventListener("mousedown", this.onmousedown.bind(this), false);
        canvas.addEventListener("mouseup", this.onmouseup.bind(this), false);
        canvas.addEventListener("mousemove", this.onmousemove.bind(this), false);

        canvas.addEventListener("mouseup", this.restart.bind(this), false);
    },
    onmousedown: function(e) {
        e.preventDefault();

        this.mouse = true;

        var x = e.offsetX;
        var y = e.offsetY;

        if(!this.endgame && this.plate[this.plate.length-1] !== undefined && this.plate[this.plate.length-1].overlaps(x,y)){
            this.dragItem = true;
        }
    },
    onmouseup: function(e) {
        e.preventDefault();

        this.mouse = false;

        if(!this.endgame) {

            var x = e.offsetX;
            var y = e.offsetY;

            var currentItem = this.plate[this.plate.length-1];

            if(this.dragItem){
                if(
                    ((this.sceneItems[0].overlaps(x,y) && currentItem.type === "tomato") ||
                    (this.sceneItems[1].overlaps(x,y) && currentItem.type === "lettuce") ||
                    (this.sceneItems[2].overlaps(x,y) && currentItem.type === "cheese") ||
                    (this.sceneItems[3].overlaps(x,y) && currentItem.type === "bread") ||
                    (this.sceneItems[4].overlaps(x,y) && currentItem.type === "salami") ||
                    (this.sceneItems[5].overlaps(x,y) && currentItem.type === "egg")) &&
                    !this.endgame
                ) {
                    this.score += 1;
                    if(this.score > this.best) {
                        this.best = this.score;
                    }
                    this.updateScore();
                    if(this.plate.length > 1) {
                        pointSound.play();
                    }
                    var randomID = Math.random().toString();
                    this.animatedTxt[randomID] = new Font(x-16, y-20, "+1", 4);
                    this.animatedTxt[randomID].color = {r:0,g:200,b:0,a:1};
                    this.animatedTxt[randomID].direction = 0;
                    delete randomID;
                } else {
                    this.lives--;
                    this.updateLives();
                    dropSound.play();
                    var randomID = Math.random().toString();
                    this.animatedTxt[randomID] = new Font(x-16, y-20, "-@", 4);
                    this.animatedTxt[randomID].color = {r:200,g:0,b:0,a:1};
                    this.animatedTxt[randomID].direction = 1;
                    delete randomID;
                    if(this.lives === 0) {
                        this.endgame = true;
                    }
                }

                this.dragItem = false;
                this.plate.pop();

                if(this.plate.length === 0 && this.lives > 0) {
                    if((this.sceneItems[3].overlaps(x,y) && currentItem.type === "bread")) {
                        this.timer += 5;
                        timeSound.play();
                        var randomID = Math.random().toString();
                        this.animatedTxt[randomID] = new Font(canvas.width/2-46, canvas.height/2-55, "time +5", 3);
                        this.animatedTxt[randomID].color = {r:0,g:200,b:0,a:1};
                        delete randomID;
                    }

                    this.ingredients += this.multiplier;
                    this.createPlate();
                }
            }
        }
    },
    onmousemove: function(e) {
        e.preventDefault();

        if(this.dragItem){

            var x = e.offsetX;
            var y = e.offsetY;

            var ingredient = this.plate[this.plate.length-1];
            ingredient.setPos(x, y);
        }
    },
    update: function(dt) {
        //render score effects animation
        for(s in this.animatedTxt){
            if(this.animatedTxt[s].color.a <= 0) {
                delete this.animatedTxt[s];
            } else {
                if(this.animatedTxt[s].direction) {
                    this.animatedTxt[s].y += 70*dt;
                } else {
                    this.animatedTxt[s].y -= 70*dt;
                }

                this.animatedTxt[s].color.a -= 0.25*dt;
            }
        }


        if(this.timer > 1 && !this.endgame)
        {
            this.timer -= dt;
            this.timerTxt.setText("time: " + parseInt(this.timer,10).toString());
            this.timerTxtBg.setText("time: " + parseInt(this.timer,10).toString());
        } else {
            this.endgame = true;
        }
    },
    render: function(dt) {
        this.table.render(dt);

        this.scoreTxtBg.render(dt);
        this.scoreTxt.render(dt);
        this.livesTxtBg.render(dt);
        this.livesTxt.render(dt);
        this.timerTxtBg.render(dt);
        this.timerTxt.render(dt);

        //render items
        for(var i = 0; i < this.sceneItems.length; i++){
            this.sceneItems[i].render(dt);
        }

        //render score effects
        for(s in this.animatedTxt){
            this.animatedTxt[s].render(dt);
        }

        //render sandwich
        for(var p = 0; p < this.plate.length; p++){
            this.plate[p].render(dt);
        }

        if(this.endgame){
            this.gameoverTxt[2].setText('score: ' + this.score.toString());
            this.gameoverTxt[3].setText('best: ' + this.best.toString());
            this.gameover();
        }
    },
    updateScore: function() {
        this.scoreTxt.setText("score: " + this.score.toString());
        this.scoreTxtBg.setText("score: " + this.score.toString());
    },
    updateLives: function() {
        var tmpString = "# # #".split(" ");

        for(var s = this.lives-1; s >= 0; s--) {
            tmpString[s] = "@";
        }

        this.livesTxt.setText(tmpString.join(" "));
        this.livesTxtBg.setText(tmpString.join(" "));
    },
    createPlate: function() {
        this.plate = [];
        this.plate.push(new Bread(canvas.width/2, canvas.height/2));

        for(var i = 0; i < Math.floor(this.ingredients)-1; i++) {
            var rand = Math.floor(Math.random() * 5);

            switch (rand) {
                case 0:
                    this.plate.push(new Cheese(canvas.width/2, canvas.height/2));
                    break;
                case 1:
                    this.plate.push(new Lettuce(canvas.width/2, canvas.height/2));
                    break;
                case 2:
                    this.plate.push(new Salami(canvas.width/2, canvas.height/2));
                    break;
                case 3:
                    this.plate.push(new Tomato(canvas.width/2, canvas.height/2));
                    break;
                case 4:
                    this.plate.push(new Egg(canvas.width/2, canvas.height/2));
                    break;
            }
        }
    },
    gameover: function() {
        ctx.fillStyle = "rgba(0,0,0,0.875)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        this.showgameover = true;

        for(var g = 0; g < this.gameoverTxt.length; g++) {
            this.gameoverTxt[g].render();
        }
    },
    restart: function() {
        if(this.showgameover) {
            localStorage.setItem("best-score", this.best);
            this.destroy();
            this.init();
        }
    },
    destroy: function() {
        canvas.removeEventListener("mousedown", this.onmousedown.bind(this), false);
        canvas.removeEventListener("mouseup", this.onmouseup.bind(this), false);
        canvas.removeEventListener("mousemove", this.onmousemove.bind(this), false);

        canvas.removeEventListener("mouseup", this.restart.bind(this), false);
    }
};
