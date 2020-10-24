class Paper{
    constructor(x, y, radius){
        var options={
            restitution : 0.3,
            friction : 0.5,
            density : 0.2
        }
        this.x = x
        this. y =y
        this.body = Bodies.circle(x, y, radius-45, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}