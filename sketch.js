var balloonImg, balloon,bgImg,bg;
var position, database;

function preload(){
  bgImg = loadImage("HotAirBallon-01.png");
  balloonImg = loadAnimation("HotAirBallon-02.png","HotAirBallon-03.png","HotAirBallon-03.png");
}

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(600,600);
    
    

    balloon = createSprite(250,500,10,10);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale=0.4;


}

function draw(){
    background(bgImg)

    


        if(keyDown(LEFT_ARROW)){
            balloon.x=balloon.x-10;
        }
        else if(keyDown(RIGHT_ARROW)){
            balloon.x=balloon.x+10;
        }
        else if(keyDown(UP_ARROW)){
            balloon.y=balloon.y-10;
        }
        else if(keyDown(DOWN_ARROW)){
            balloon.y=balloon.y-10;
        }
    
    drawSprites();
    }



