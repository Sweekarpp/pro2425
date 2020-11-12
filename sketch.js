const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var grounds = [];
var ground2;
var ground3;
var ground4;
var bls = [];
var l = true;
var imag;

function preload() {
    imag = loadImage("dustbin.png");
}

function keyPressed() {
	if(keyCode = 38){
		Matter.Body.applyForce(ball.body, ball.body.position, {
			x: 0, 
			// you might want ot increase this by a bit(below)
			y: -0.05
		});
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	ground4 = new Ground(width-170,height-46,135,20);
	grounds.push(new Ground(width/2,height-17,width + 1000,30));
	ground2 = new Ground(width-230,height-105,20,125);
	ground3 = new Ground(width-110,height-105,20,125);
    ball = new Ball(200,200,20);



    Engine.run(engine);
}


function draw() {
  	rectMode(CENTER);
  	background("red");
	Engine.update(engine);


    ball.display();
	ground3.display();
	ground2.display();
	ground4.display();
	imageMode(CENTER);
    image(imag, width-170, height-110, 150,150);
		
	
	if(l === true){
	 	for (let ground of grounds) {
			ground.display();
		}
	}
	ball.fly();
	
  	drawSprites();
 
}

function keyPressed() {
    Matter.Body.applyForce(ball.body, ball.body.position, {
		x: 0.05,
		y: -0.05
	});
	}


