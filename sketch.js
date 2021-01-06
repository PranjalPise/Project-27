  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint=Matter.Constraint;

  var engine, world;
  var bob1,bob2,bob3,bob4,bob5,box,string1,string2,string3,string4,string5;



function setup(){
    var canvas = createCanvas(900,650);
    engine = Engine.create();
    world = engine.world;

    box=new Box(400,200,600,30);
    bob1=new Bob (200,421,50);
    bob2=new Bob (311,300,50);
    bob3=new Bob (434,419,50);
    bob4=new Bob (500,419,50);
    bob5=new Bob (619,419,50);
    

      string1 =new Rope (bob1.body,{x:198,y:216});
      string2 = new Rope (bob2.body,{x:289,y:216});
      string3 = new Rope (bob3.body,{x:395,y:216});
      string4 = new Rope (bob4.body,{x:495,y:216});
      string5 = new Rope (bob5.body,{x:588,y:216});




}

function draw(){
  
    background("skyblue");
    Engine.update(engine);

      string1.display();
      string2.display();
      string3.display();
      string4.display();
      string5.display();

      box.display();
      bob1.display();
      bob2.display();
      bob3.display();
      bob4.display();
      bob5.display();
    


    text(mouseX+","+mouseY,mouseX,mouseY);
    
   
}

function keyPressed()
 { if (keyCode === UP_ARROW) { 
   Matter.Body.applyForce(bob1.body,bob1.position,{x:-85,y:-85}); } }