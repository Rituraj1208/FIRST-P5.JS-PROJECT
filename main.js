function preload() {
}

function setup() {
    canvas=createCanvas(640, 480);
    canvas.position(350, 100);
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    stroke(190, 0, 0);
    fill(190, 0, 0);
    circle(50, 50, 60);

    stroke(190, 0, 0);
    fill(190, 0, 0);
    circle(550, 50, 60);

    stroke(190, 0, 0);
    fill(190, 0, 0);
    circle(50, 430, 60);

    stroke(190, 0, 0);
    fill(190, 0, 0);
    circle(550, 430, 60);

    stroke(0, 255, 0);
    fill(0, 255, 0);
    rect(81, 37, 439, 25);

    stroke(0, 255, 0);
    fill(0, 255, 0);
    rect(40, 83, 25, 315);

    stroke(0, 255, 0);
    fill(0, 255, 0);
    rect(81, 420, 439, 25);

    stroke(0, 255, 0);
    fill(0, 255, 0);
    rect(540, 83, 25, 315);

    image(video, 175, 130, 200, 200);
}

function take_snapshot() {
    save('FIRST P5.JS PROJECT.png');
}