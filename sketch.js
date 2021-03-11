const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    createCanvas(1200,750);
    engine = Engine.create();
    world = engine.world;

    base=new Base(600,100,250,20)
    ball1=new Ball(520,300)
    ball2=new Ball(560,300)
    ball3=new Ball(600,300)
    ball4=new Ball(640,300)
    ball5=new Ball(680,300)


    chain1=new Chain(ball1.body,base.body,-80,0)
    chain2=new Chain(ball2.body,base.body,-40,0)
    chain3=new Chain(ball3.body,base.body,0,0)
    chain4=new Chain(ball4.body,base.body,40,0)
    chain5=new Chain(ball5.body,base.body,80,0)

    Engine.run(engine);

}

function draw(){
    background(230);
    Engine.update(engine);

    base.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    
}
function keyPressed(){
    if (keyCode===UP_ARROW){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85})
    }
}

