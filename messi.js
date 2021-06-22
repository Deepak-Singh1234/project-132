birds = "";
status = "";
function preload(){
    birds = loadImage("messiball.jpg");

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
    fill("#ffff00");
    noFill();
    stroke("#ffff00");
    rect(180 , 40 , 180 , 550);
    text("LIONEL MESSI" ,190 ,  60);
   
}

function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
    }

function back(){
    window.open("index.html");
}