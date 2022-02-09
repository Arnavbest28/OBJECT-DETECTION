var img1 = "";

function setup() {
    canvas = createCanvas(600, 430)
    canvas.center();
}

function preload() {
    img1 = loadImage("Plane-In-The-Sky.jpg");
}

function draw() {
    image(img1, 0, 0, 640, 420);

    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Plane", 90, 130);

    noFill();
    stroke(7, 4, 74);
    rect(50, 100, 400, 100);


    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Clouds", 300, 250);

    noFill();
    stroke(255, 255, 255);
    rect(20, 210, 560, 200);


    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Sun", 390, 80);

    noFill();
    stroke(7, 4, 74);
    rect(250, 35, 190, 60);

}

function b2(){
    window.location="index.html";
}