var img4 = "";

function setup() {
    canvas = createCanvas(600, 430)
    canvas.center();
}

function preload() {
    img4 = loadImage("ocean.png");
}

function draw() {
    image(img4, 0, 0, 640, 420);

    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Ship", 50, 200);

    noFill();
    stroke(7, 4, 74);
    rect(40, 170, 530, 130);


    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Water", 300, 400);

    noFill();
    stroke(255, 255, 255);
    rect(20, 320, 550, 100);


    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Cloud", 150, 80);

    noFill();
    stroke(7, 4, 74);
    rect(10, 35, 300, 100);

}

function b4(){
    window.location="index.html";
}