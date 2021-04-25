class Plinko{
    constructor(posx, posy){
        var options = {
            isStatic: true
        }
        //this.radius = radius;
        this.posx = posx;
        this.posy = posy;

        this.body = Bodies.circle(posx, posy, 10, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
            noStroke();
            fill('lightgrey');
        
            ellipseMode(RADIUS);
            ellipse(this.posx, this.posy, 10, 10);
        pop();
    }
   
}