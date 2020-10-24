class Dustbin{
    constructor(x, y, width, height){
        var options={
            friction : 0.7,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png")
        World.add(world, this.body);
    }
    display(){
        if(this.body.position.y==680){
            imageMode(CENTER);
            image(this.image, this.body.position.x+5, this.body.position.y-90, this.width, 200);
        }
        else{
            fill(0,255,0);
            rectMode(CENTER);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
        }
    }
}