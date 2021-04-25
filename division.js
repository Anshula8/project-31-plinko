class Division{
    constructor(posx){
        this.posx = posx;
        this.body = Bodies.rectangle(posx, 340, 15, 100,{isStatic:true})
        World.add(world, this.body);
    }

    display(){
        push();
            fill('lightgrey');
            noStroke();
        
            //var pos = this.body.position;
            rectMode(CENTER);
            rect(this.posx, 340, 15, 100);
        pop();

    }
}