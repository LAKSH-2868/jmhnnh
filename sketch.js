var PLAY = 1;
var END = 0;
var gamestate = PLAY
var mario,mario2,marioback,marioback2,mask,maskSp,sanitizer,sanitizerSp,dettol,dettolSp,soap,soapSp,virus,virusSp;
var flag,flagSp,hospital,hospitalSp,home,homeSp;
var Smario,marioSp,marioJ,tunnel,t1,t2,t3,t4,t5,t6,tunnelSp;
var maskGroup,virusGroup,dettolGroup,sanitizerGroup,soapGroup;
var backGround;
var InvisibleG,leftE,rightE;
var score = 0;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,brick,brick1,brick2,brick3;
var m1,m2,m3,m4;

function preload(){
    backGround = loadImage("IMAGES/MARIO BACKGROUND.jpg");
    marioback2 = loadAnimation("IMAGES/M11.png");
    marioback = loadAnimation("IMAGES/M11.png","IMAGES/M22.png","IMAGES/M33.png","IMAGES/M44.png")
    mario2 = loadAnimation("IMAGES/M1.png");
    mario = loadAnimation("IMAGES/M1.png","IMAGES/M2.png","IMAGES/M3.png","IMAGES/M4.png")
    marioJ = loadAnimation("IMAGES/M5.png");
    virus = loadImage("IMAGES/CORONA.png");
    mask = loadImage("IMAGES/MASK.png");
    sanitizer = loadImage("IMAGES/SANITIZER..png");
    dettol = loadImage("IMAGES/DETTOL.png");
    soap = loadImage("IMAGES/SOAP.png");
    hospital = loadImage("IMAGES/HOSPITAL.jpg");
    flag = loadImage("IMAGES/FLAG.gif");
    home = loadImage("IMAGES/FINISHING HOUSE.png");
    tunnel = loadImage("IMAGES/TUNNEL.png");
    brick = loadImage("IMAGES/BRICK.gif");
    brick1 = loadImage("IMAGES/BRICK1.png");
    brick2 = loadImage("IMAGES/BRICK2.png");
    brick3 = loadImage("IMAGES/BRICK3.png");

}

function setup(){
    createCanvas(displayWidth,displayHeight);
    marioSp = createSprite(100,800/2);
    marioSp.scale = 2;
    marioSp.addAnimation("marioo",mario2);
    marioSp.addAnimation("mario",mario);
    marioSp.addAnimation("mariooo",marioback);
    marioSp.addAnimation("mariojump",marioJ);
    marioSp.addAnimation("marioooo",marioback2);

    InvisibleG = createSprite(displayWidth*4,displayHeight-100,displayWidth*9,5);
    InvisibleG.visible = false;

    leftE = createSprite(-505,displayHeight/2,5,displayHeight);
    //leftE.visible = false; 

    rightE = createSprite(displayWidth*8-650,displayHeight/2,5,displayHeight);
    rightE.visible = false;

    t1 = createSprite(displayWidth/2-40,InvisibleG.y-50);
    t2 = createSprite(displayWidth*1.5,InvisibleG.y-50);
    t3 = createSprite(displayWidth*3,InvisibleG.y-50);
    t4 = createSprite(displayWidth*4.5,InvisibleG.y-50);
    t5 = createSprite(displayWidth*6,InvisibleG.y-50);
    t6 = createSprite(displayWidth*7.5,InvisibleG.y-50);
    
    t1.addImage(tunnel);
    t1.scale = 1.3;
    t2.addImage(tunnel);
    t2.scale = 1.3
    t3.addImage(tunnel);
    t3.scale = 1.3
    t4.addImage(tunnel);
    t4.scale = 1.3
    t5.addImage(tunnel);
    t5.scale = 1.3
    t6.addImage(tunnel);
    t6.scale = 1.3

    b1 = createSprite(displayWidth,displayHeight/2);
    b1.addImage(brick1);

    b2  = createSprite(displayWidth-250,displayHeight/2+100);
    b2.addImage(brick);

    b3  = createSprite(displayWidth*2.5,displayHeight/2+200);
    b3.addImage(brick2);

    b4= createSprite(displayWidth*2.5-250,displayHeight/2+75);
    b4.addImage(brick2);

    b5  = createSprite(displayWidth*2,displayHeight/2-75);
    b5.addImage(brick1);

    b6 = createSprite(displayWidth*3+250,displayHeight/2-75);
    b6.addImage(brick3);

    b7 = createSprite(displayWidth*3+500,displayHeight/2+75);
    b7.addImage(brick2);

    b8 = createSprite(displayWidth*4+50,displayHeight/2-55);
    b8.addImage(brick);

    b9 = createSprite(displayWidth*4+100,displayHeight/2-35);
    b9.addImage(brick);

    b10 = createSprite(displayWidth*4+150,displayHeight/2-15);
    b10.addImage(brick);

    b11 = createSprite(displayWidth*4+200,displayHeight/2+5);
    b11.addImage(brick);

    b12 = createSprite(displayWidth*4+250,displayHeight/2+25);
    b12.addImage(brick);

    b13 = createSprite(displayWidth*4+300,displayHeight/2+45);
    b13.addImage(brick);

    b14 = createSprite(displayWidth*4,displayHeight/2-55);
    b14.addImage(brick);

    b15 = createSprite(displayWidth*4-50,displayHeight/2-35);
    b15.addImage(brick);

    b16 = createSprite(displayWidth*4-100,displayHeight/2-15);
    b16.addImage(brick);

    b17 = createSprite(displayWidth*4-150,displayHeight/2+5);
    b17.addImage(brick);

    b18 = createSprite(displayWidth*4-200,displayHeight/2+25);
    b18.addImage(brick);

    b19 = createSprite(displayWidth*4-250,displayHeight/2+45);
    b19.addImage(brick);

    b20 = createSprite(displayWidth*4+350,displayHeight/2+65);
    b20.addImage(brick);

    maskSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
    maskSp.scale = 0.1;
    maskSp.addImage(mask);

    m1 = createSprite((random(300,1200)),(random(100,600)));
    m1.scale = 0.1;
    m1.addImage(mask);

    m2 = createSprite((random(1500,2500)),(random(100,600)));
    m2.scale = 0.1;
    m2.addImage(mask);

    m3 = createSprite((random(4000,5500)),(random(100,600)));
    m3.scale = 0.1;
    m3.addImage(mask);

    m4 = createSprite((random(6700,10000)),(random(100,600)));
    m4.scale = 0.1;
    m4.addImage(mask);

    virusGroup = new Group();
    dettolGroup = new Group();
    maskGroup = new Group();
    soapGroup = new Group();
    sanitizerGroup = new Group();
    }

function draw(){
    background("black");
    image(backGround,-600,0,displayWidth*8+1000,displayHeight);
    marioSp.velocityY = marioSp.velocityY+0.5;

    camera.x = marioSp.x;
    camera.y = displayHeight/2;
    leftE.x = camera.x-1000;
    
    textSize(50);
    fill("black");
    text("SCORE : "+score,100,100);
    
    if(gamestate === PLAY){
        virusF();
        //maskF();
        dettolF();
        soapF();
        sanitizerF();

    if(keyDown ("space") && marioSp.y>=350){
        marioSp.changeAnimation("mariojump",marioJ);
        marioSp.velocityY = -5;       
    }
    if(keyDown ("RIGHT_ARROW")){
        marioSp.changeAnimation("mario",mario);
       marioSp.x = marioSp.x+10;
    }
    if(keyDown ("LEFT_ARROW") && marioSp.x>0){
        marioSp.changeAnimation("mariooo",marioback);
        marioSp.x = marioSp.x-10; 
    }
    if(keyWentUp ("RIGHT_ARROW")){
        marioSp.changeAnimation("marioo",mario2);
        marioSp.velocityX = 0;
    }
    if(keyWentUp ("LEFT_ARROW")){
        marioSp.changeAnimation("marioooo",marioback2);
        marioSp.velocityX = 0;
    }
    if(keyWentUp("space")){
        marioSp.changeAnimation("marioo",mario2);
    }   
    if(virusGroup.isTouching(marioSp)){
        virusGroup.destroyEach();
        score = score - 2;
    }
    if(marioSp.isTouching(maskSp)){
        maskSp.destroy();
        maskSp = createSprite((random(displayWidth*8,displayWidth/2)),(random(100,650)),10,10)
        maskSp.scale = 0.1;
        maskSp.addImage(mask);
        score = score + 2;
    }

        if(marioSp.isTouching(m1)){
            m1.destroy();
            m1 = createSprite((random(300,1200)),(random(100,600)));
            m1.scale = 0.1;
            m1.addImage(mask);
            score = score + 2;
        }
        if(marioSp.isTouching(m2)){
            m2.destroy();
            m2 = createSprite((random(1500,2500)),(random(100,600)));
            m2.scale = 0.1;
            m2.addImage(mask);
            score = score + 2;
            }

        if(marioSp.isTouching(m3)){
            m3.destroy();
            m3 = createSprite((random(4000,5500)),(random(100,600)));
            m3.scale = 0.1;
            m3.addImage(mask);
            score = score + 2;
        }
        if(marioSp.isTouching(m4)){
            m4.destroy();
            m4 = createSprite((random(6700,10000)),(random(100,600)));
            m4.scale = 0.1;
            m4.addImage(mask);
            score = score + 2;
        }

    if(marioSp.isTouching(sanitizerGroup)){
        sanitizerGroup.destroyEach();
        score = score + 2;
    }
    if(marioSp.isTouching(soapGroup)){
        soapGroup.destroyEach();
        score = score + 2;
    }
    if(marioSp.isTouching(dettolGroup)){
        dettolGroup.destroyEach();
        score = score + 2;
    }

    
    marioSp.collide(InvisibleG);
    marioSp.collide(leftE);
    marioSp.collide(rightE);
    marioSp.collide(t1);
    marioSp.collide(t2);
    marioSp.collide(t3);
    marioSp.collide(t4);
    marioSp.collide(t5);
    marioSp.collide(t6);
    marioSp.collide(b1);
    marioSp.collide(b2);
    marioSp.collide(b3);
    marioSp.collide(b4);
    marioSp.collide(b5);
    marioSp.collide(b6);
    marioSp.collide(b7);
    marioSp.collide(b8);
    marioSp.collide(b9);
    marioSp.collide(b10);
    marioSp.collide(b11);
    marioSp.collide(b12);
    marioSp.collide(b13);
    marioSp.collide(b14);
    marioSp.collide(b15);
    marioSp.collide(b16);
    marioSp.collide(b17);
    marioSp.collide(b18);
    marioSp.collide(b19);
    marioSp.collide(b20);
    

}

    drawSprites();
    }


function virusF(){
    if(frameCount%35 === 0){
        virusSp = createSprite(displayWidth*8-20,Math.round(random(400-100,600+50)),10,10);
        virusSp.scale = 0.1+0.2
        virusSp.addImage(virus);
        virusSp.velocityX = -20;
        //time = distance/speed(10000/20)
        virusSp.lifetime = 500;
        virusGroup.add(virusSp);
    }
}

function maskF(){
    if(frameCount%50 === 0){
        maskSp = createSprite((random(displayWidth*8,displayWidth/2)),  (random(100,650)),10,10)
        maskSp.scale = 0.1;
        maskSp.addImage(mask);
        maskGroup.add(maskSp);
    }
}

function sanitizerF(){
    if(frameCount%50 === 0){
        sanitizerSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        sanitizerSp.scale = 0.1;
        sanitizerSp.addImage(sanitizer);
        sanitizerGroup.add(sanitizerSp);
    }
}

function dettolF(){
    if(frameCount%50 === 0){
        dettolSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        dettolSp.scale = 0.2;
        dettolSp.addImage(dettol);
        dettolGroup.add(dettolSp);
    }
}

function soapF(){
    if(frameCount%50 === 0){
        soapSp = createSprite(Math.round(random(displayWidth*8,displayWidth/2)),Math.round(random(100,650)),10,10)
        soapSp.scale = 0.2;
        soapSp.addImage(soap);
        soapGroup.add(soapSp);
    }
}
