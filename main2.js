var img = "";

function setup() {
    canvas = createCanvas(600, 430)
    canvas.center();
}

function preload() {
    img = loadImage("car.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);

    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Buggati", 90, 70);

    noFill();
    stroke(7, 4, 74);
    rect(30, 50, 200, 365);


    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Ferrari", 300, 70);

    noFill();
    stroke(7, 4, 74);
    rect(250, 30, 130, 365);


    fill(255, 255, 255);
    stroke(255, 1, 1);
    textSize(17);
    text("Lamborghini", 450, 30);

    noFill();
    stroke(7, 4, 74);
    rect(400, 10, 190, 365);

}

function b1(){
    window.location="index.html";
}