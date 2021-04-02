class Drop{
    constructor(x,y){
        var options={
            isStatic: true,
            friction:0.1
        }
        this.drop=Bodies.circle(x,y,20,options)
        this.radius=20
        World.add(world, this.drop)
        
    }

    update(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        var pos = this.drop.position;
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,20)
        fill("red")

    }

    
}