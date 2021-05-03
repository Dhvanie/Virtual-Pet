var dog, dogImg, happyDog, happyDogImg;
var foodS, foodStock, database;

function preload()
{
  dogImg = loadImage("dogImg.png")
  happyDogImg = loadImage("dogImg1.png")
}

function setup() 
{
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg)
  dog.scale = 0.2

  happyDog = createSprite(150,150,20,20);
  happyDog.addImage(happyDogImg)
  happyDog.scale = 0.2

  foodStock = database.ref("Food");
  foodStock.on("vale",readStock);
}


function draw() 
{  
  drawSprites();
  background((46, 139, 87));
  
  dog.x = dogImg.position.x 
  dog.y = dogImg.position.y 

  happyDog.x = happyDogImg.position.x 
  happyDog.y = happyDogImg.position.y 
}