let x, y
let img1, img2, img3, img4, img5
let centerX = 90
let centerY = 80
let theWidth = 130
let theHeight = 140
let changedWidth = 150
let changedHeight = 160
let isNormalActive = true

function preload() {
    img1 = loadImage("ent1.jpg");
    img2 = loadImage("ent2.jpg");
    img3 = loadImage("ent3.jpg");
    img4 = loadImage("ent4.jpg");
    img5 = loadImage("ent5.jpg");
}

function setup() {
    createCanvas(200, 200);
    imageMode(CENTER)
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
    img3.filter(THRESHOLD);
}

function draw() {
    background(255);
    if (isNormalActive) {
        NormalEnt()
    }
    else {
        InnerEmotionEnt()
    }

}

function NormalEnt() {
    if (frameCount % 150 <= 35) {
        image(img1, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 80) {
        image(img2, centerX, centerY, theWidth, theHeight);
    } else if (frameCount % 150 <= 150) {
        image(img3, centerX, centerY, theWidth, theHeight);
    }
}

function InnerEmotionEnt() {
    if (frameCount % 110 < 55) {
        image(img4, centerX, centerY, changedWidth, changedHeight);
    }
    else {
        image(img5, centerX, centerY, changedWidth, changedHeight);
    }
}

function ChangeEnt() {
    isNormalActive = !isNormalActive;
}