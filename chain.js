class Chain {

constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
length:5,
stiffness:0.05,

}
this.chain = Constraint.create(options);
World.add(world,this.chain); 
}
display(){
var PointA = this.chain.bodyA.position;
var PointB = this.chain.bodyB.position;
strokeWeight(5);
stroke("yellow");
line(PointA.x,PointA.y,PointB.x,PointB.y);
}



}