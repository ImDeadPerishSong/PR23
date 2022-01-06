
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(100,400,800,20,ground_options);
  World.add(world,ground);


  ground2 = Bodies.rectangle(50,200,100,20,ground_options);
  World.add(world,ground2);

  ground3 = Bodies.rectangle(350,200,100,20,ground_options);
  World.add(world,ground3);




  rotate1 = Bodies.rectangle(200,150,80,15,ground_options);
  World.add(world,rotate1);
  //-----------------------------------------------------------

  ball = Bodies.circle(100,10,10,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(150,5,10,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(170,70,10,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(190,40,10,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(210,20,10,ball_options);
  World.add(world,ball5);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 //bolas?

  ellipse(ball2.position.x,ball2.position.y,10);
  //----------------------------------------------
  ellipse(ball.position.x,ball.position.y,10);
  //----------------------------------------------
  ellipse(ball3.position.x,ball3.position.y,10);
  //----------------------------------------------
  ellipse(ball4.position.x,ball4.position.y,10);
  //----------------------------------------------
  ellipse(ball5.position.x,ball5.position.y,10);



//plataformas
  rect(ground.position.x,ground.position.y,800,20);
  //------
  rect(ground2.position.x,ground2.position.y,100,20);
  //-------
  rect(ground3.position.x,ground3.position.y,100,20);


  //rotatores

  rect(rotate1.position.x,rotate1.position.y,80,15);

  //you see me like a see a round;

 
console.log(ground.position.y);
}
  
  

