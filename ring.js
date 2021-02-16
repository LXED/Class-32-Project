class Ring
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.RingWidth=100;
		this.RingHeight=70;
		this.wallThickness=10;
		this.image = loadImage("Ring.png")
		
		
		this.leftWallBody=Bodies.rectangle(this.x-this.RingWidth/2, this.y-this.RingHeight/1, this.wallThickness, this.RingHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.RingWidth/2, this.y-this.RingHeight/1, this.wallThickness, this.RingHeight, {isStatic:true})
        
		
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;
			
			
			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			strokeWeight(1);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			rect(10,0,this.wallThickness, this.RingHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			strokeWeight(1);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(10,-85,this.wallThickness, 100);
			pop()

			
			imageMode(CENTER);
      		image(this.image,730,80,220,220);

      		
			
	}

}