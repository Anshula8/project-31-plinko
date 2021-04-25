class Ground{
    constructor(){
        this.body = Bodies.rectangle(300, 435, 600, 100,{isStatic:true})
        World.add(world, this.body);
    }

    display(){
        push();
            fill('lightgrey');
            noStroke();
        
            //var pos = this.body.position;
            rectMode(CENTER);
            rect(300, 435, 600, 100);
        pop();

    }
}