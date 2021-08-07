class rope{
	constructor(body1,body2,pointA,pointB)
	{

	this.pointA= pointA
	this.pointB= pointB
	

	var options={
		bodyA: body1,
		bodyB: body2,
		pointB:{x:this.pointA, y:this.pointB},
		isStatic: true
	}
	this.body = Bodies.rectangle(body1,body2,this.pointA,this.pointB,options);
	World.add(world,this.body);
}    

}
