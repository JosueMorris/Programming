var bgChange = false;

function setup() {
    createCanvas(500,500);
    background("#791438");
}
function draw() {
    fill("#ffffff");
    strokeWeight(1);
    ellipse(random(width),
    180,5,5);
    fill("#D57474");
    strokeWeight(3);
    fill("#ffffff");
    strokeWeight(1);
    ellipse(random(width),
    275,5,5);
    fill("#D57474");
    strokeWeight(3);
    textSize(90);
    textFont("Courier");
    textStyle(ITALIC);
    text("Loading",55,250);
    line(20,480,480,480);
    line(480,480,480,20);
    line(480,20,20,20);
    line(20,480,20,20);
}
function mousePressed(){
    if (bgChange == false){
        background("#7742AF");
        bgChange = true;
    }else{
        background("#791438");
        bgChange = false;
    }
}