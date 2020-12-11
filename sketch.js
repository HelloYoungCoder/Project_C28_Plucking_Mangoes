//Project - 28: Plucking Mangoes
//Creating Namespaces
const {Engine, World, Bodies, Body, Render, Constraint} = Matter;

//Creating variables
var groundObj, treeObj, playerObj;
var mango_Obj1, mango_Obj2, mango_Obj3, mango_Obj4, mango_Obj5;
var mango_Obj6, mango_Obj7, mango_Obj8, mango_Obj9, mango_Obj10;
var stoneObj;
var launchObj;

function setup() {
	createCanvas(1200, 600);

	//Engine & World
	engine = Engine.create();
	world = engine.world;

	//Creating Bodies
	groundObj = new Ground(width/2, 600, width, 20);
	treeObj = new Tree(900,300,600,550);
	playerObj = new Player(200,450,200,310);

	stoneObj = new Stone(130,500,20);

	launchObj = new Launcher(stoneObj.body,{x: 130, y:480});

	//Creating Mango Objects
	mango_Obj1 = new Mango(700, 200, 30);
	mango_Obj2 = new Mango(750, 230, 30);
	mango_Obj3 = new Mango(800, 200, 30);
	mango_Obj4 = new Mango(850, 230, 30);
	mango_Obj5 = new Mango(900, 130, 30);
	mango_Obj6 = new Mango(850, 100, 30);
	mango_Obj7 = new Mango(950, 200, 30);
	mango_Obj8 = new Mango(1000, 230, 30);
	mango_Obj9 = new Mango(1050, 200, 30);
	mango_Obj10 = new Mango(1100, 230, 30);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(245,222,179);
	
	//Display Objects
	groundObj.display();
	treeObj.display();
	playerObj.display();

	mango_Obj1.display();
	mango_Obj2.display();
	mango_Obj3.display();
	mango_Obj4.display();
	mango_Obj5.display();
	mango_Obj6.display();
	mango_Obj7.display();
	mango_Obj8.display();
	mango_Obj9.display();
	mango_Obj10.display();

	stoneObj.display();
	launchObj.display();

	detectCollision(stoneObj,mango_Obj1);
	detectCollision(stoneObj,mango_Obj2);
	detectCollision(stoneObj,mango_Obj3);
	detectCollision(stoneObj,mango_Obj4);
	detectCollision(stoneObj,mango_Obj5);
	detectCollision(stoneObj,mango_Obj6);
	detectCollision(stoneObj,mango_Obj7);
	detectCollision(stoneObj,mango_Obj8);
	detectCollision(stoneObj,mango_Obj9);
	detectCollision(stoneObj,mango_Obj10);

	drawSprites();
}

function mouseDragged(){
	Body.setPosition(stoneObj.body,{x: mouseX, y:mouseY});
}

function mouseReleased(){
	launchObj.fly();
}

function keyPressed(){
	if (keyCode === 32) {
		Body.setPosition(stoneObj.body,{x: 180, y:480});
		launchObj.attach(stoneObj.body);
	}
}

function detectCollision(object,target){
	launcherPos = object.body.position;
	targetPos = target.body.position;

	var distance = int(dist(launcherPos.x, launcherPos.y,targetPos.x,targetPos.y));

	console.log(distance);
	console.log(object.radius);
	console.log(target.radius);

	if (distance <= object.radius + target.radius){

		Body.setStatic(object.body, false);

	}
}