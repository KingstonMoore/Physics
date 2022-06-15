var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies

function setup(){
  createCanvas(400,400)
  engine = Engine.create()
  world = engine.world
  box = Bodies.rectangle(200, 200, 100, 50)
  World.add(world, box)
  console.log(box)
  var prop = {isStatic: true}
  ground = Bodies.rectangle(200, 400, 400, 30, prop)
  World.add(world, ground)
  var prop2 = {restitution: 0.5}
  ball = Bodies.circle(300, 200, 20, prop2)
  World.add(world, ball)
}

function draw(){
 background("black")
 Engine.update(engine)
 rectMode(CENTER)
 rect(box.position.x, box.position.y, 100, 50)
 fill("red")
 rect(ground.position.x, ground.position.y, 400, 30)

 ellipseMode(RADIUS)
 ellipse(ball.position.x, ball.position.y, 20)
}

