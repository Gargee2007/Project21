var canvas;
var surface1, surface2, surface3, surface4, box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    //surface1=createSprite(300,400,400,400);
    //surface1.shapeColor=color(720);
    box=createSprite(random(20,750))
    surface1=createSprite(100,100,50,50)
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
