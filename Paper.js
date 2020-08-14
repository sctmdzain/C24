class Paper{
    constructor(){
        var opt={
            isStatic:false,
            restitution:0.6, 
            friction:0.5,
            density:1.2,

            
        }
        this.body=Bodies.circle(900,500,20,opt);
        //this.image=loadImage("paper.png")
        World.add(world,this.body)

    }
    display(){
        push();
        var pos = this.body.position
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("skyblue")
        //ellipseimage(this.image,0,0,this.width/4,this.height/4)
        ellipse(0,0,17,17);
        pop();
    }
}