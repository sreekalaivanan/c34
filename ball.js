//22-23 w/ ellipse command 
class Ball{
    constructor(x,y,width,height, angle){
        var options ={
            //'restituition': 1,
            'frictionAir': 0.7, //0.005
            'density': 1
        }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    //this.r = 
    World.add(world,this.body);
    }

display(){
    //var pos = this.body.position;
    var angle = this.body.angle;
    push();
    //translate (pos.x, pos.y);
    rotate (angle);
    //ellipseMode(RADIUS);
    fill ("grey");
    ellipse(0,0, this.width, this.height);
    pop ();
    }
}