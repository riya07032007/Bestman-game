class Drop{
    constructor(x,y){
        var options={
            isStatic: false,
            friction:0.1
        }
        this.drop=Bodies.circle(x,y,5,options)
        this.radius=5
        World.add(world, this.drop)
        
    }

    update(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        var pos = this.drop.position;
        var angle=this.drop.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("blue")
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop()
    }

    
}