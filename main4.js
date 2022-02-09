var img1 = "";

function setup() {
    canvas = createCanvas(600, 430)
    canvas.center();
}

function preload() {
    img1 = loadImage("room.jpg");
}

function draw() {
    image(img1, 0, 0, 640, 420);

    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Curtain", 500, 130);

    noFill();
    stroke(7, 4, 74);
    rect(490, 20, 100, 380);


    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Bed", 300, 320);

    noFill();
    stroke(7, 4, 74);
    rect(200, 210, 250, 200);

}

function b3(){
    window.location="index.html";
}