class Hero{
    constructor(x,y,r){
        var options = {
            density: 1,
            frictionAir: 1
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image=loadImage("Superhero-01.png");
        this.body=Bodies.circle(this.body, this.y, (this.r)/2, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
};