var starImg,bgImg, img;
var star, starBody;
var fada, img_fada, vozFada;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    img_fada = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);


    fada = createSprite(20,200);
    fada.addAnimation(img_fada);
    fada.scale = 0.3;
    
    star = createSprite(600,80);
	star.addImage(starImg);
	star.scale = 0.2;

    img = createSprite(300,320);
    img.addImage(bgImg);
    img.scale = 0.4

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);
}
function draw(){

    
    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true);
    }

    if(keyCode === RIGHT_ARROW){
        fada.x=fada.x+20;
    }
    if(keyCode === LEFT_ARROW){
        fada.x=fada.x -20;
    }
  
    drawSprites();
}
