dog_cat = "";
status = "";
function preload(){
    dog_cat = loadImage("dog_cat.jpg");

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
    image(dog_cat , 0 ,0 , 500 , 420);
    fill("#00a6ff");
    noFill();
    stroke("#00a6ff");
    rect(10 , 50 , 300 , 300);
    text("cat",20,70);
     
    fill("#ff0000");
    noFill();
    stroke("#ff0000");
    rect(300 , 50 , 300 , 300);
    text("dog" , 310 , 70);
    
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