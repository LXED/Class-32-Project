class ball{
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':1,
          'friction':1.0,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
	  this.height = height;
    this.image = loadImage("Ball.png");
    

    
    Matter.Bodies.circle(x,y,20,20)

   
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("white");
      ellipse(0, 0, this.width, this.height);
      image(this.image,0, 0, 50, 50);
      pop();
    }
    
  }