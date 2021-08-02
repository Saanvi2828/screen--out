const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var database,game,form,gameState=0,playerCount
var player,ground
var time
var box1,box2,box3,box4,box5,box6,box7,box8,log1
var engine, world;
var pigs=[];
var sling;
var bird;

function preload(){
    backgroundImg = loadImage("sprites/download.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    database = firebase.database()
    engine = Engine.create();
    world = engine.world;
    game=new Game()
    game.start()
    
}

function draw(){
    background(backgroundImg);

    Engine.update(engine);

    
    //sling.display();
    
    //if (frameCount%60===0){
        //pigs.push(new Pigs(random(width/2-10,width/2+10),10,10))
    //}
    if(playerCount===1){
        gameState=1
    }

    if(gameState===1){
        game.playState()
    }
    //drawSprites();
}