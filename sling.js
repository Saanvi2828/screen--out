class Sling{
    constructor(bodyA, pointB){
        var options = {
            isStatic:false,
            bodyA: body1,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        strokeWeight(4);
        stroke("black");
        line(bodyA,pointB.x,pointB.y)
    }
}
    
