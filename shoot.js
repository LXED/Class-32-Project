class shot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 5
        }
        this.pointB = pointB


        this.Shoot = Constraint.create(options);
        World.add(world, this.Shoot);
    }

    fly(){

        this.Shoot.bodyA = null;


    }

    attach(body){
        this.Shoot.bodyA = body;
    }
    

    display(){

        if(this.Shoot.bodyA){

            var pointA = this.Shoot.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
       
    }
    
}