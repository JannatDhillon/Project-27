class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
          bodyA:bodyA,
          bodyB:bodyB,
          pointB:{x:this.offsetX,y:this.offsetY}
        }
        
        this.chain=Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        var anchorX=pointB.x+this.offsetX
        var anchorY=pointB.y+this.offsetY
       
        strokeWeight(2)
        line(pointA.x,pointA.y,anchorX,anchorY)
   
    }
}