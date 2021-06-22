birds = "";
status = "";
function preload(){
    birds = loadImage("birds.jpg");

}

function setup(){
    canvas = createCanvas(500,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("drdoom").innerHTML = "STATUS : object is being detected ";

}
function modelLoaded(){
    console.log("model has kept the name from cocossd to coconutssd");
    status = true;
    objectDetector.detect(img , gotResult);
}
function draw(){
    image(birds , 0 ,0 , 500 , 420);

    fill("#00a6ff");
    text("bird" , 30 , 70 );
    stroke("#00a6ff");
    noFill();
    rect(0 , 60 , 200,350);
    stroke("#ffff00");
    rect(180 , 40 , 180 , 550);
    text("bird" ,190 ,  60);
    stroke("#2200ff");
    rect(330 , 40 , 180 , 550);
    text("bird",330 , 70);
}

function back(){
    window.open("index.html");
}

function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    }