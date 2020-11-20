const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



function setup() {
  createCanvas(1800,800);
  engine = Engine.create();
    world = engine.world;
 
    brick1=new Brick(1600,700,70,70)
    brick2=new Brick(1500,700,70,70)
    brick3=new Brick(1400,700,70,70)
    brick4=new Brick(1300,700,70,70)
    brick5=new Brick(1600,600,70,70)
    brick6=new Brick(1500,600,70,70)
    brick7=new Brick(1400,600,70,70)
    brick8=new Brick(1300,600,70,70)
    brick9=new Brick(1350,500,70,70)
    brick10=new Brick(1450,500,70,70)
    brick11=new Brick(1550,500,70,70)
    brick12=new Brick(1425,400,70,70)
    brick13=new Brick(1500,400,70,70)
    brick14=new Brick(1460,300,70,70)
    crown1=new Crown(1460,250,40,35)

    ground = new Ground(900,780,1800,20)

    //canon=new Canon(200,750,210,120)

}

function draw() {
  background(0);  
  Engine.update(engine);

  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();

  crown1.display();

  //canon.display();
  


  ground.display();


  drawSprites();
}