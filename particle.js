class Particle{
    constructor(posx){
        var options = {
            restitution:0.4
        }
        //this.radius = radius;
        this.posx = posx;

        this.body = Bodies.circle(posx, 10, 10, options);
        this.color = color(random(0,255), random(0, 255), random(0,255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
            translate(pos.x, pos.y);
            //stroke(255);
            rotate(angle);
            noStroke();
            fill(this.color);
        
            ellipseMode(RADIUS);
            ellipse(this.posx, 5, 10, 10);
        pop();
    }
   
}